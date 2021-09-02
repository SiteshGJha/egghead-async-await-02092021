//Convert any function into an Asynchronous function

import fetch from "node-fetch";

class GitHubApiClient {
    async fetchUser(handle) {
        const url = `https://api.github.com/users/${handle}`;
        const response = await fetch(url);
        return await response.json();
    }
}

(async () => {
    const client = new GitHubApiClient();
    const user = await client.fetchUser('siteshgjha');
    console.log(user.name);
    console.log(user.location);
})();