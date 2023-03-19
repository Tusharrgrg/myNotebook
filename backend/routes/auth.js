const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator');


const JWT_SECRET = "HiTushar"



// ----->   ROUTE 1 : create User POST : "/api/auth/createuser" Doesn't require login <---------
// ...............................................................................................

router.post('/createuser', [
    // email must be an email
    body('email').isEmail(),
    body('name').isLength({ min: 3 }),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),

], async (req, res) => {

    const errors = validationResult(req);
    //if there are error exist , or bad request
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        //check if  user with this email is exist already
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry this email is already exist" })
        }

        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password, salt);
        // create  user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ authtoken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})



// ----->   ROUTE 2 : Authenticate User POST : "/api/auth/login" Doesn't require login  <---------
// ...............................................................................................

router.post('/login', [
    // email must be an email
    body('email', 'enter a valid email id').isEmail(),
    // // password must be at least 5 chars long
    body('password', "Password cannot be blank").exists(),

], async (req, res) => {
    const errors = validationResult(req);
    //if there are error exist , or bad request
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json("Please try to login with correct credentials");
        }

        //comapare entered password 
        const passworCompare = await bcrypt.compare(password, user.password);
        if (!passworCompare) {
            return res.status(400).json("Please try to login with correct credentials");
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ authtoken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})


// ----->   ROUTE 3 : Get loggin User details POST : "/api/auth/getuser" login required  <---------
// ...............................................................................................

module.exports = router;