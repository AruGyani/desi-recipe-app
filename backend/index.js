const express = require('express');
const mongodb = require('mongodb');
const app = express();
const cors = require('cors');

const crypto = require("crypto");
const csprng = require('csprng');

require('dotenv').config();

const port = process.env.DEV_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.DB_USER;

mongodb.MongoClient.connect(uri, {useUnifiedTopology: true}, (err, client) => {
    let db = client.db('myFirstDatabase');
    const collection = db.collection("users");

    app.post("/api/login/get", (req, res) => {
        collection.find({ user: req.body.user }).toArray((err, docs) => {
            if (err) {
                res.send("Error in GET request");
            } else {
                if (docs.length > 0) {
                    let hashedPassword = docs[0].pass;
                    const salt = docs[0].salt;

                    if (!req.body.pass) {
                        res.send({error: "No password entered."});
                    } else {
                        const hashedQueryPassword = hash(`${salt}${req.body.pass}`);

                        if (hashedPassword === hashedQueryPassword) {
                            res.send({...docs[0]});
                        } else {
                            res.send({error: "There was an error with either the username or passcode."});
                        }
                    }
                } else {
                    res.send({error: "There was an error with either the username or passcode."});
                }
            }
        });
    });

    app.post("/:user", (req, res) => {
        const salt = csprng(160, 36);
            
        // Hash the password
        req.body.pass = hash(`${salt}${req.body.pass}`);

        collection.insertOne(
            {...req.body, user: req.params.user, salt },
            (err, r) => {
                if (err) {
                    res.send("Error in POST request");
                } else {
                    res.send("Information inserted")
                }
            }
        );
    });

    /* app.put("/:user", (req, res) => {
        collection.find({user: req.params.user }).toArray((err, docs) => {
           if (err) {
               res.send("An error occurred in the PUT request");
           } else {
               if (docs.length > 0) {
                   let hashedPassword = docs[0].pass;
                   const salt = docs[0].salt;

                   if (!req.query.pass) {
                       res.send("There was no password associated with the GET request.");
                   } else {
                       const hashedQueryPassword = hash(`${salt}${req.query.pass}`);

                       if (hashedPassword === hashedQueryPassword) {
                           req.body.pass = hash(req.body.pass);

                           collection.updateOne(
                               {user: req.params.user},
                               {$set: {...req.body, user: req.params.user, pass: req.params.pass, salt } },
                               (err, r) => {
                                   if (err) {
                                       console.log("An error occurred in updating the user information");
                                   } else {
                                       res.send("Updated user info");
                                   }
                               }
                           );
                       } else {
                           res.send("Incorrect password.");
                       } 
                   }
               } else {
                   res.send(`No users found with name ${req.params.user}`);
               }
           }
        }); 
    }); */
});

app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});

function hash(password) {
    return crypto
            .createHash(process.env.HASH_TYPE)
            .update(password)
            .digest(process.env.BASE);
}