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
            console.log("TWEET : "+value);
            new SentimentAnalysisService().getAnalysis(value).then( result => {
                console.log("RESULTAT : "+ result);
            }).catch(e => {
                console.error(e); 
            })
        })
        .catch(reason => {
            console.error(reason);
        });
})