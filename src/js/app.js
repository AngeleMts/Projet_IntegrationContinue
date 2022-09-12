// Put your stuff here !

const content = "test Luna";

const options = {
    method: 'POST',
    url: 'https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '33192c707emshb093070e9988775p13f715jsn04c60e78d1aa',
        'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
    },
    data: '{"language":"english","text":"' + content + '"}'
};

axios.request(options).then(function (response) {
    console.log(response.data);
    const data = response.data;
    const msg = `Your text sounds ${data.sentiment
        }. It has ${Math.floor(
            data.aggregate_sentiment.pos * 100
        )}% positivity, and ${Math.floor(
            data.aggregate_sentiment.neg * 100
        )}% negativity. It has a neutral level of ${Math.floor(
            data.aggregate_sentiment.neu * 100
        )}%.`;
    console.log('MESSAGE : '+msg); 
    document.getElementById("sentiment_analysis").innerHTML = msg;
}).catch(function (error) {
    console.error(error);
});