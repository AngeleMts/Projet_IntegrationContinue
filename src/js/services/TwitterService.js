import ApiConfig from "../configs/TwitterApp.js";

export default class TwitterService {


    async getLastTweetByUsername(username) {
        try {
            let response = await fetch(`${ApiConfig.API_URL}/tweet/${username}`,
                {
                    method: 'GET'
                });
            let body = await response.text();

            if (response.status === 200) {
                return Promise.resolve(body);
            } else {
                return Promise.reject(body);
            }
        } catch (e) {
            return Promise.reject(e);
        }

    }

}