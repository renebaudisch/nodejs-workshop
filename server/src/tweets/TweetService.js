/**
 * @author Sven Koelpin
 */


const fakeDataBase = require('../db/FakeDatabase');


const getTweets = (start, size) => {
    //TODO: Return all tweets (use the fakeDataBase)
    //- sorted by id (desc) (Hint: use the array.sort-function, e.g. [1,2,3].sort((a,b)=>a<b))
    //- use the given start + size parameters to create a sub-array (Hint: use the array.slice-function)
    return [];
};

const getTweet = id => {
    const tweetId = parseInt(id, 10);

    //TODO return a single tweet by it's tweetId
    //- Hint: use the array.find-function
    return null;
};

const countTweets = () => {
    //TODO: return the count of all tweets (TIP: use array.length)
    return 0;
};

const createTweet = tweet => {
    //TODO
    //- add the tweet to the database (Hint: use array.push)
    //- set the id of a tweet BEFORE adding it
    //- return the created tweet
    return null;
};


module.exports = {
    getTweets,
    getTweet,
    countTweets,
    createTweet
};