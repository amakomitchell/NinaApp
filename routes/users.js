const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        gender: req.body.gender,
        phone: req.body.phone,
        contact: req.body.contact,
        email: req.body.email,
        username: req.body.username,
        pasword: req.body.passowrd
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to register user'});
        } else{
            res.json({succes: true, msg: 'User registered'});
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

//Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});



module.exports = router;