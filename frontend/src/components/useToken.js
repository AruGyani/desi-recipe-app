import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        
        return tokenString;
    };

    // eslint-disable-next-line
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken._id));
        sessionStorage.setItem('user', JSON.stringify(userToken.user));

        setToken(userToken._id);
    };

    return {
        setToken: saveToken,
        token
    }
}