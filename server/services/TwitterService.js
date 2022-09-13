import {TwitterApi} from 'twitter-api-v2';

export default class TwitterService {
    twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAEVJgwEAAAAA2qkI9qgA7drsV287J0FmkqtLp4M%3Dn402PjNIoMfHN0jANgPL2D8RGkiiRcvQ9TzNcj015S11kX2S3m');

    cleanTweet(rawTweet) {
        // remove @exemple in tweet
        const cleanedTweet = rawTweet.replace(/(\s+|^)@\S+/g, "");

        // remove url in tweet
        return cleanedTweet.replace(/https?:\/\/.*?[\s+]/g, "");
    }

    async getLastTweetByUsername(username) {

        const readOnlyClient = this.twitterClient.readOnly;

        const user = await readOnlyClient.v2.userByUsername(username);

        const tweetList = await readOnlyClient.v2.userTimeline(user.data.id, {max_results: 5});

        const tweet = tweetList.tweets[0].text;

        return this.cleanTweet(tweet);
    }
}
