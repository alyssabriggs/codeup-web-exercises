"use strict";

// function wait(num) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve();
//         }, num);
//     });
// }

const wait = num => {
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            resolve();
            }, num)
    });
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


const lastCommit = (username) => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${github}`}})
        .then(response => response.json())
        .then(data => data.find(event => event.type === "PushEvent"))
            .then(event => event.created_at)
            .then(date => console.log(date)
        );

        // .then(users => users.map(user => user.created_at).find(user => "PushEvent"));
        // .then(users => users.map(user => user));
};

console.log(lastCommit("alyssabriggs"));