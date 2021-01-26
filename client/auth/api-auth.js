import { response } from "express";

const signin = async(user) =>{
    try {
        let response = await fetch('/auth/signin',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(user),
        });
        return await response.json();
    } catch (error) {
        console.log()
    }
};

const signout = async () =>{
    try {
        let response = await fetch('/auth/signout', {method: 'GET'});
        return await response.json()
    } catch (error) {
        console.log();
    }
};

export {signin, signout};
