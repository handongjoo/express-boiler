const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log("userRouter");
    res.send('userRouter');
})

module.exports = router;