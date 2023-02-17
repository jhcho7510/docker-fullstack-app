// 필요한 모듈들을 가져오기
const express = require("express");
const bodyParser = require('body-parser');

// db정보 불러온다.
const db = require('./db');


// Express 서버를 생성
const app = express();

// json 형태로 오는 요청의 본문을 해석해 줄 수 있게 등록
app.use(bodyParser.json());

// 테이블 생성하기
// db.pool.query(`CREATE TABLE lists (
//     id INTEGER AUTO_INCREMENT,
//     value TEXT,
//     PRIMARY KEY(id)
// )`, (error, results, fields)=> {
//     console.log('results', results);
// });

// DB lists 테이브에 있는 모든 데이터를 프런트 서버에 보내기
app.get('/api/values', function(req, res, next){
    db.pool.query('SELECT * FROM lists;',(error, results, fields) => {
        if(error)
            return res.status(500).send(error);
        else 
            return res.json(results);    
    });
});

// 클라이언트에서 입력한 값을 데이터베이스 lists 테이블에 넣기
app.post('/api/value', function(req, res, next){
    db.pool.query(`INSERT INTO lists(value) VALUES("${req.body.value}");`,
      (error, results, fields) => {
        if(error)
            return res.status(500).send(error);
        else 
            return res.json({success: true, value: req.body.value});    
    });
});






app.listen(5000, () => {
    console.log('애플리케이션이 5000번 포트에서 시작되었습니다.');
});