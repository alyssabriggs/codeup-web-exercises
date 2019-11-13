"use strict";

function wait(num) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, num);
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


function lastCommit(username) {
    return new Promise(function (resolve, reject) {
        resolve(fetch("https://api.github.com/users/" + username + "/events", {headers: {'Authorization': `token ${github}`}}));
    })
        .then(response => response.json())
        .then(users => users.map(user => user.created_at).find(user => "PushEvent"));
}

console.log(lastCommit("alyssabriggs"));