//Call an Asynchronous funtion in a promise chain

import fetch from "node-fetch";

async function showGitHubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    try {
        const repsonse = await fetch(url);
        return await repsonse.json();
    } catch (err) {
        console.log(err);
    }
}

showGitHubUser('siteshgjha')
.then(user => {
    console.log(user.name);
    console.log(user.location);
})