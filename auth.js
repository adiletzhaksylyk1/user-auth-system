const express = require('express');
const User = require('./user');
const { registerValidation, loginValidation } = require('./validation');

const router = express.Router();

router.post('/register', async (req,
                                res) => {
    try {
        const { error } = registerValidation(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { username, email, password } = req.body;
        const userId = await User.register(username, email, password);

        res.status(201).json({
            message: 'User registered successfully',
            userId
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/login', async (req,
                             res) => {
    try {
        const { error } = loginValidation(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const { email, password } = req.body;
        res.json({
            message: 'Login successful',
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
