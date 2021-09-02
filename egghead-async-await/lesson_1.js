import fetch  from "node-fetch";

async function showGitHubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    try {
        const response = await fetch(url);
        const user = await response.json();
        console.log(user.name);
        console.log(user.location);
    } catch (err) {
        console.log(err);
    }
}

showGitHubUser('siteshgjha');