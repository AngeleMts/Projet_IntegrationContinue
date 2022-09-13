import TwitterService from '../server/services/TwitterService.js';
import * as assert from 'assert';

describe('Array', function () {
    describe('#getLastTweetByUsername()', function () {
        it('should return last tweet given a username', function () {
            new TwitterService().getLastTweetByUsername("RGopigo").then(function (tweet) {
                assert.equal(tweet, "test fct tweeter");
            });

        });
    });
});