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


// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const languages = users.filter(function (user) {
    return user.languages.length >= 3;
});

console.log(languages);


// Use .map to create an array of strings where each element is a user's email address

const emails = users.map(function (user) {
    return user.email;
});

console.log(emails);


// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const years = users.reduce((totalYears, user) => {
    return totalYears + user.yearsOfExperience;
}, 0);

console.log(years);

const averageYears = years/users.length;

console.log(averageYears);


// Use .reduce to get the longest email from the list of users.

const longestEmail = emails.reduce((longest, email) => {
    // return emailLength.length > user.length ? emailLength.email : user.email
    if (email.length > longest.length){
        return email
    } else {
        return longest
    }
}, "");

console.log(longestEmail);


// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const userNames = users.reduce((str, user) => {
    return `${str}, ${user.name}`;
}, "Your instructors are: david, vivian, sophie, trant") + ".";

console.log(userNames);


// Use .reduce to get the unique list of languages from the list of users.

let listOfLanguages = Array.from(users.reduce((accumulator, user) => {
    user.languages.map(language => accumulator.add(language));
    return accumulator;
}, new Set()));

console.log(listOfLanguages);