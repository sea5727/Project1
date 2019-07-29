const express = require('express');
const router = express.Router();
const Account = require('../models/account');
/*
    ACCOUNT SIGNUP: POST /api/account/signup
    BODY SAMPLE: { "username": "test", "password": "test" }
    ERROR CODES:
        1: BAD USERNAME
        2: BAD PASSWORD
        3: USERNAME EXISTS
*/

router.post('/signup', (req, res) => {
    console.log('signup');
    // Check Username Format
    let usernameRegx = /^[a-z0-9]+$/;
    if(!usernameRegx.test(req.body.username)){
        return res.status(400).json({
            error : "BAD USERNAME",
            code : 1,
        })
    }

    //Check Password Length
    if(req.body.password.length < 4 || typeof req.body.password !== "string"){
        return res.status(400).json({
            error : "BAD PASSWORD",
            code : 2,
        })
    }
    
    Account.findOne({username : req.bbody.username}, (err, exist) => {
        if(err) throw err;
        if(exist){
            return res.status(409).json({
                error : "USERNAME EXISTS",
                code : 3,
            });
        }

        //Create Account
        let account = new Account({
            username : req.body.username,
            password : req.body.password,
        })

        account.password = account.generateHash(account.password);

        //Save In The Database
        account.save( err => {
            if(err) throw err;
            return res.json({success : true});
        })

    })

    
    /* to be implemented */
    res.json({ success: true });
})

router.post('/login', (req, res) => {
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