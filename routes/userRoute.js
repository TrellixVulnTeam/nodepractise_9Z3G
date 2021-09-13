const express = require('express');
const router = express.Router();
const User = require('./../controllers/userController');

router.get('/list', (req, res) => {
    User.list(req, res);
});

router.post('/create', (req, res) => {
    User.create(req, res)
});

router.post('/edit', (req, res) => {
    User.update(req, res)
});

router.post('/view', (req, res) => {
    User.view(req, res)
});

router.post('/login', (req, res) => {
    User.login(req, res)
});


module.exports = router;
