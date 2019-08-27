const express = require("express");
const Profile = require('../data/profile');
const profileController = express.Router();
profileController.get('/profile', (req,res) => {
    res.json(Profile);
});
module.exports = profileController;