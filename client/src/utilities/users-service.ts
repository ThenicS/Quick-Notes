// Service modules export business/app logic
// such as managing tokens, etc.
// Service modules often depend upon API modules
// for making AJAX requests to the server.

import * as usersAPI from './users-api';

export async function signUp(userData: any) {
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token);
    // return getUser();
    console.log(token);
    return getUser();
}

export function getToken() {
    // getItem will return null if the key does not exists
    const token = localStorage.getItem('token');
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT's exp is expressed in seconds, not miliseconds
    if (payload.exp * 1000 < Date.now()) {
        // Token has expired
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}