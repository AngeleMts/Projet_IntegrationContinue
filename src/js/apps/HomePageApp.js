import TwitterService from "../services/TwitterService.js";
import SentimentAnalysisService from "../services/SentimentAnalysisService.js";

const searchTextBox = document.getElementById('search-textbox');
const searchButton = document.getElementById('search-button');

const tweetAuthor = document.getElementById('tweet-author');
const tweetContent = document.getElementById('tweet-content');
const analyseContent = document.getElementById('analyse-content');
const resultSection = document.getElementById('result-section');

// ------------------------------------------------------------//

searchTextBox.focus();
hideResult();


let slider = document.getElementById('slider-container');
let sliderIndex = 0;
setInterval(sliderTick, 1000);

function sliderTick() {
    sliderIndex += 150;

    if (sliderIndex > slider.scrollWidth) {
        sliderIndex = 0;
    }

    slider.scrollLeft = sliderIndex;
}

// ------------------------------------------------------------//

searchButton.addEventListener('click', () => {
    new TwitterService().getLastTweetByUsername(searchTextBox.value)
        .then(value => {
            const parsedValue = JSON.parse(value);

            console.log(parsedValue);
            console.log("ID : " + parsedValue.id)
            console.log("TWEET : " + parsedValue.tweet);

            displayTweetSentiments(parsedValue.tweet);
        })
        .catch(reason => {
            console.error(reason);
        });
})

// trigger button on enter key
searchTextBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("search-button").click();
    }
});

// ---------------------------------------------------------------------------------------

function displayTweetSentiments(tweet) {
    new SentimentAnalysisService().getAnalysis(tweet).then(result => {
        const parsedAnalysis = JSON.parse(result);
        console.log(parsedAnalysis);
        const msg = `This tweet sounds ${parsedAnalysis.sentiment
        }. It has ${Math.floor(
            parsedAnalysis.aggregate_sentiment.pos * 100
        )}% positivity, and ${Math.floor(
            parsedAnalysis.aggregate_sentiment.neg * 100
        )}% negativity. It has a neutral level of ${Math.floor(
            parsedAnalysis.aggregate_sentiment.neu * 100
        )}%.`;
        console.log("ANALYSIS : " + msg);

        tweetAuthor.innerHTML = `@${searchTextBox.value}`;
        tweetContent.innerHTML = `" ${tweet} "`;
        analyseContent.innerHTML = msg;
        showResult();
        window.scrollTo(0, resultSection.offsetTop);
    }).catch(e => {
        console.error(e);
    });
}

function hideResult(){
    resultSection.style.visibility = 'hidden';
    resultSection.style.display = 'none';
}

function showResult(){
    resultSection.style.visibility = 'visible';
    resultSection.style.display = 'flex';
}