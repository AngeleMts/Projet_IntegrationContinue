import TwitterService from '../server/services/TwitterService.js';
import SentimentAnalysisService from "../src/js/services/SentimentAnalysisService.js";

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

describe('SentimentAnalysis', function () {
    describe('#getAnalysisSentiment', function () {
        it('should return the sentiment analysis of the sentence', function () {
            new SentimentAnalysisService().getAnalysis("I'm so happy to test my function").then(function (analysis) {
                assert.equal(analysis.sentiment, 'positive');
            });
        });
    });
    describe('#getAnalysisNeg', function () {
        it('should return the sentiment negatif', function () {
            new SentimentAnalysisService().getAnalysis("I'm so happy to test my function").then(function (analysis) {
                assert.equal(analysis.aggregate_sentiment.neg,0); 
            });
        });
    });
    describe('#getAnalysisPos', function () {
        it('should return the sentiment positif', function () {
            new SentimentAnalysisService().getAnalysis("I'm so happy to test my function").then(function (analysis) {
                assert.equal(analysis.aggregate_sentiment.pos,0.4); 
            });
        });
    });
    describe('#getAnalysisNeu', function () {
        it('should return the sentiment neutral', function () {
            new SentimentAnalysisService().getAnalysis("I'm so happy to test my function").then(function (analysis) {
                assert.equal(analysis.aggregate_sentiment.neu,0.6); 
            });
        });
    });
    describe('#getAnalysisCompound', function () {
        it('should return the sentiment compound', function () {
            new SentimentAnalysisService().getAnalysis("I'm so happy to test my function").then(function (analysis) {
                assert.equal(analysis.aggregate_sentiment.compound,0.6115); 
            });
        });
    });
});