const users = [
    {
        username: 'Kristen',
        email: 'kristen@kristen.com'
    },
    {
        username: 'Katie',
        email: 'katie@katie.com'
    },
    {
        username: 'Mary',
        email: 'mary@mary.com'
    }
];

const thoughts = [
    {
        thoughtText: "This is a thought.",
	    username: "Kristen"
    },
    {
        thoughtText: "Red roses are not particularly pretty.",
	    username: "Kristen"
    },
    {
        thoughtText: 'Tuesdays are arguably the worst day.',
	    username: "Katie"
    },
    {
        thoughtText: 'My opinions are obviously facts.',
	    username: "Katie"
    },
    {
        thoughtText: 'Health insurance is a scam and I hate it.',
	    username: "Mary"
    },
    {
        thoughtText: 'Bookbinding is very relaxing as a hobby.',
	    username: "Mary"
    },
 
];

// const getRandomArrItem = (arr) => arr[Math.floor(Math.random()* arr.length)];

// const getRandomUser = () =>
//     `${getRandomArrItem(users)}`;

// const getRandomThoughts = () => 
//     `${getRandomArrItem(thoughts)}`

module.exports = { users, thoughts };
// module.exports = { getRandomUser, getRandomThoughts}