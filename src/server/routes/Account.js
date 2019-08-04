const express = require('express');
const router = express.Router();
const model = require('../models/account');
/*
    ACCOUNT SIGNUP: POST /api/account/signup
    BODY SAMPLE: { "username": "test", "password": "test" }
    ERROR CODES:
        1: BAD USERNAME
        2: BAD PASSWORD
        3: USERNAME EXISTS
        4: BAD EMAILL
*/

router.post('/register', async (req, res) => {
    console.log('register');

    if(!req.body.user.email){
        return res.status(400).json({
            message : "이메일을 잘못 입력하였습니다",
            error : "BAD EMAIL",
            code : 4,            
        })

    }
    // Check Username Format
    let usernameRegx = /^[a-z0-9]+$/;
    if(!usernameRegx.test(req.body.username)){
        return res.status(400).json({
            message : "ID를 잘못 입력하였습니다",
            error : "BAD USERNAME",
            code : 1,
        })
    }

    // Check Password Length
    if(req.body.user.password.length < 4 || typeof req.body.user.password !== "string"){
        return res.status(400).json({
            message : "PASSWORD 가 잘못되었습니다",
            error : "BAD PASSWORD",
            code : 2,
        })
    }
    try{
        var findOne = await model.Account.findOne({email : req.body.user.email});
        if(findOne){
            console.log('Already Registered Email ' + req.body.user.email);
            return res.status(409).json({
                message : "이미 존재하는 이메일입니다",
                error: "USERNAME EXISTS",
                code: 3,
            });
        }
        
        //Create Account
        let account = new model.Account({
            email : req.body.user.email,
            username: req.body.user.username,
            password: req.body.user.password,
        })
        
        console.log('new Account = ', account);
    
        //Save In The Database
        var saveUser = await account.save();
        console.log('save result : ', saveUser);
        if(saveUser)
            return res.json({ success: true });
        else 
            throw new Error('account save error');
    
    }
    catch(err){
        console.log(err);
        return res.status(501).json({
            message : "관리자에게 문의하세요",
            error : "SERVER INTERNAL EROR",
            code : -1,
        })
    }

})

router.post('/login', async (req, res) => {
    console.log('login');

    
    let email =  req.body.user.email;
    let password = req.body.user.password;
    console.log("email : " , email);
    console.log("password : " , password);

    var findOne = await model.Account.findOne({
        email : email,
        password : password,
    });

  /* to be implemented */
    if(findOne){
        console.log(findOne);
        res.status(200).json({
            
        });
    }
    else{
        return res.status(501).json({
            message : "이메일 혹은 비밀번호가 다릅니다",
            error : "BAD EMAIL",
            code : 4,
        })
    }
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