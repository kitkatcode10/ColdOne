// import tokenService from "./tokeService";

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
    .then(data => data); 
}

export default {
    signup
}; 

// token lesson > getting function get user , login function, log out function, import the token service + payload stuff
// token service will be in controller folder it needs it to compare passwords, if password entered is correct - >!!! go througuh lesson wohoooooooOOOOooOoOO 
