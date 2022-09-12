import express from 'express';
import TwitterService from "./services/TwitterService.js";
import cors from "cors";

const app = express()
const port = 3000;

app.use(cors());

app.get('/tweet/:username', async (req, res) => {
    const username = req.params.username;
    let twitterService = new TwitterService();

    console.log(`Get last tweet requested for : ${username}`);

    try {
        const value = await twitterService.getLastTweetByUsername(username)
        res.send(value);
    } catch (e) {
        res.status(500);
        console.error(e);
        res.send(e);
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
