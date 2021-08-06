function setToken(token) {
    localStorage.setItem('token', token); 
}

function getToken(){
    let token = localStorage.getItem('token');

    if (token) {
        // Checking if it's expired, and if it is, it will remove it! takes the payload repping the user
        const payload = JSON.parse(atob(token.split('.')[1]));

        // it's converting it to miliseconds... then double check if the token is still valid, 24 hrs expired?

        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem('token'); 
            token = null; 
        }
    }
    return token; 
}

function getUserFromToken () {
    const token = getToken(); 
    return token ? JSON.parse(atob(token.split('.')[1])).user : null; 
}

function removeToken() {
    localStorage.removeItem('token');
}

export default {
    setToken,
    getToken, 
    removeToken, 
    getUserFromToken,

}; 