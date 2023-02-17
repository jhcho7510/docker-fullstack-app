FROM node:alpine

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY ./ ./

# 'dev' : 'nodemon server.js', 'start' : 'node server.js'
# 코드변경시 바로 반영하기 위해 nodemon을 사용함.
# package.json 파일의 scripts에 test, start, dev 속성이 정의 되어있음.
CMD ["npm", "run", "start"]