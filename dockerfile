#베이스 이미지 알파인
FROM node:12.2.0-alpine

#작업폴더 지정
WORKDIR /app

# '/app/node_modules/.bin:$PATH'
ENV PATH /app/node_modules/.bin