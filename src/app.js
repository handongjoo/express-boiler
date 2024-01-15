const express = require('express');
const userRouter = require('./routers/userRouter');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`app listen port : ${port}`)
});