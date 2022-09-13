import TwitterService from "../services/TwitterService.js";
import SentimentAnalysisService from "../services/SentimentAnalysisService.js";

const searchTextBox = document.getElementById('search-textbox');
const searchButton = document.getElementById('search-button');

// ------------------------------------------------------------//

searchTextBox.focus();


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
            console.log("VALUE : "+value);
            const parsedValue = JSON.parse(value);
            console.log(parsedValue);
            console.log("ID : " + parsedValue.id)
            console.log("TWEET : " + parsedValue.tweet);
            new SentimentAnalysisService().getAnalysis(parsedValue.tweet).then(result => {
                const parsedAnalysis = JSON.parse(result); 
                console.log(parsedAnalysis);
                const msg = `Your text sounds ${parsedAnalysis.sentiment
                }. It has ${Math.floor(
                    parsedAnalysis.aggregate_sentiment.pos * 100
                )}% positivity, and ${Math.floor(
                    parsedAnalysis.aggregate_sentiment.neg * 100
                )}% negativity. It has a neutral level of ${Math.floor(
                    parsedAnalysis.aggregate_sentiment.neu * 100
                )}%.`;
                console.log("ANALYSIS : "+msg);
            }).catch(e => {
                console.error(e);
            })
        })
        .catch(reason => {
            console.error(reason);
        });
})