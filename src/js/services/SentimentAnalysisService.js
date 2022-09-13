export default class SentimentAnalysisService {

    async getAnalysis(msg) {
        try {
            const options = {
                method: 'POST',
                url: 'https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '33192c707emshb093070e9988775p13f715jsn04c60e78d1aa',
                    'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
                },
                data: '{"language":"english","text":"' + msg + '"}'
            };
            
            var analysis = axios.request(options).then(function (response) {
                const data = JSON.stringify(response.data);
                return Promise.resolve(data); 
            }).catch(function (error) {
                return Promise.reject(error);
            });  
            
            return Promise.resolve(analysis);
        } catch (e) {
            return Promise.reject(e);
        }

    }

}