FROM node:18-alpine

WORKDIR /ems

COPY . .
RUN yarn install --production

CMD ["node", "src/index.js"]
EXPOSE 3000

