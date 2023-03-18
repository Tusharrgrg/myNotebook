const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//create User POST : "/api/auth/createuser" Doesn't require login
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
        //check if there are user with this email is exist already
        let user = await User.findOne(req.body.email);
        if (user) {
            return res.status(400).json({ error: "Sorry this email is already exist" })
        }

        // create  user
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        })
        res.json();
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error ocurred");
    }
})

module.exports = router;