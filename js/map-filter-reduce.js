"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const languages = users.filter(function (user) {
    return user.languages.length >= 3;
});

console.log(languages);

const emails = users.map(function (user) {
    return user.email;
});

console.log(emails);

const years = users.reduce((totalYears, user) => {
    return totalYears + user.yearsOfExperience;
}, 0);

console.log(years);

const averageYears = years/users.length;

console.log(averageYears);

const longestEmail = emails.reduce((emailLength, user) => {
    // return emailLength.length > user.length ? emailLength.email : user.email
    if (emailLength.length < user.length){
        return user
    } else {
        return emailLength
    }
}, "");

console.log(longestEmail);

const userNames = users.reduce((total, names) => {
    return `${total} ${names.name}`;
}, "");

console.log(userNames);
