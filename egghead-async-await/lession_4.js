//Handle Errors in aynchronous function.

import fetch from 'node-fetch';

async function fetchFromGitHub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    const json = await response.json();

    if(response.status !== 200) {
        throw Error(json.message);
    }

    return json;
}

async function showGitHubUser(handle) {
    try {
        const user = await fetchFromGitHub(`/user/${handle}`);
        console.log(user.name);
        console.log(user.location);
    } catch(error) {
        console.log(`Error: ${error.message}`);
    }
}

showGitHubUser('siteshgjha');