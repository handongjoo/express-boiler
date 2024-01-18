const express = require('express');
const userRouter = require('./routers/userRouter');
const app = express();
const path = require('path');
const port = 3000;

// 정적파일 경로
app.use(express.static('public'));

// 라우터 목록
app.use('/users', userRouter);

// ejs 엔진 사용
app.set('view engine', 'ejs')
// ejs 템플릿 위치
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(port, () => {
    console.log(`app listen port : ${port}`)
});