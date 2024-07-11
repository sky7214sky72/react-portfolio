# 단계 1: 빌드 단계
FROM node:19 as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]