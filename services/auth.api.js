"use client";

export function Login({ username, password }) {

    if (username === "Naveen" && password === "12345") {
        const userData = { username: username, password: password };
        localStorage.setItem('user', JSON.stringify(userData));

        return true;
    } else {
        alert('Invalid Credentials');
        return false;

    }
};