import {TwitterApi} from 'twitter-api-v2';

const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAEVJgwEAAAAA2qkI9qgA7drsV287J0FmkqtLp4M%3Dn402PjNIoMfHN0jANgPL2D8RGkiiRcvQ9TzNcj015S11kX2S3m');
const username = "elonmusk"

export async function getLastTweetByUsername(username) {

    const readOnlyClient = twitterClient.readOnly;

    const user = await readOnlyClient.v2.userByUsername(username);
    const tweet = await readOnlyClient.v2.userTimeline(user.data.id, {max_results: 5});

    return tweet.tweets[0].text;
}


