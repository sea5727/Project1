const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
    console.log('signup');
    /* to be implemented */
    res.json({ success: true });
})

router.post('/signin', (req, res) => {
    console.log('signin');
    /* to be implemented */
    res.json({ success: true });
})

router.get('/getinfo', (req, res) => {
    console.log('getinfo');
    res.json({success : true});
})

router.post('/logout', (req, res) => {
    console.log('logout');
    return res.json({success : true});
})

module.exports = router;