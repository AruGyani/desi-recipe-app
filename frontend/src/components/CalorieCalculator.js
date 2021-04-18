import React from 'react';

function CalorieCalculator(props) {
    return (
        <div className="container calculator">
            <form>
                <div className="form-group">
                    <input type="text" id="age" className="calorieInput" placeholder="Age"></input>
                </div>
                <div className="form-group">
                    <input type="text" id="size" className="calorieInput" placeholder="Height"></input>
                </div>
                <div className="form-group">
                    <input type="text" id="weight" className="calorieInput" placeholder="Weight"></input>
                </div>
                <div className="form-group">
                    <input type="text" id="weight" className="calorieInput" placeholder="Activity Level"></input>
                </div>
                <button type="submit" class="button">Calculate</button>
            </form>
        </div>
    )
}

export default CalorieCalculator;