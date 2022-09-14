# Projet Intégration Continue
Projet réalisé par :
* Julien FAURE
* Paul ACHARD
* Luna LOISEL--RAMEL
* Angèle MATEOS 

Ce projet s'inscrit dans le cadre du cours d'intégration continue.

sentiment-analysis : [https://rapidapi.com/gaurmanojkumar530/api/text-analysis12/](API_sentiment-analysis)

## Init

```bash
npm install
```
## Start backend server

```bash
npm run server
```

## Web page

```bash
npm run front
```

Go to [http://127.0.0.1:8080](http://127.0.0.1:8080)

> **Backend server need to be started !**

## Docker

### Build

```bash
sudo docker build . -t moodrt
```

### Run

```bash
sudo docker run -p 3000:3000 -p 8080:8080 -d --name moodrt-container moodrt
```

### Stop

```bash
sudo docker stop moodrt-container
```

### Remove old container

```bash
sudo docker container rm moodrt-container
```