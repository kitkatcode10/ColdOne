import { getQueriesForElement } from '@testing-library/react';
import tokenService from './tokenService'; 

const BASE_URL = '/api/users/'; 

function signup(user) {
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if (res.ok) return res.json(); 
        throw new Error('Email already in use'); 
    })
    .then(({ token }) => {
        tokenService.setToken(token); 
    }); 
}

function getUser() {
    return tokenService.getUserFromToken(); 
}

function login(creds) {
    return fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(creds)
    })
    .then(res => {
        if (res.ok) return res.json(); 
        throw new Error('Bad Credentials!');
    })
    .then(({token}) => tokenService.setToken(token)); 
}

function logout() {
    tokenService.removeToken(); 
}

export default {
    signup,
    getUser,
    logout,
    login 
}; 

// token service will be in controller folder it needs it to compare passwords, if password entered is correct - >!!! go througuh lesson wohoooooooOOOOooOoOO 
