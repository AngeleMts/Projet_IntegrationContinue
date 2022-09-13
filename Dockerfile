FROM node:12

WORKDIR /app

COPY src/ src/
COPY server/ server/
COPY package.json .
COPY startup.sh .

RUN npm install


CMD ["/bin/bash", "startup.sh"]