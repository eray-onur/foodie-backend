// Used MVC.
const express = require("express");
// Getting dummy food data from the 'data' directory.
const {hamburger, pizza, foodInBasket, foodInMenu} = require("./../data/food/food");
// Using an Express Router as a Controller.
const foodController = express.Router();

foodController.get("/foods/:foodName/image", (req,res) => {
    console.log(`${req.params.foodName}`);
    res.sendFile(`${req.params.foodName}.jpg`, {root: `${__dirname}/../assets/images`} ,(err) => {
        console.log(err);
    });
}).get("/foods/:foodName", (req,res) => {
    const requestedFood = req.params.foodName;
    switch(requestedFood) {
        case "hamburger": 
            res.json(hamburger);
        break;
        case "pizza":
            res.json(pizza);
        break;
    }
}).get("/foods/basket", (req,res) => {
    res.json(foodInBasket);
}).get("/foods/menu", (req,res) => {
    res.json(foodInMenu);
}).post("/foods/basket", (req,res) => {

    const food = req.query.food;
    foodInBasket.push(food);

    console.log(foodInMenu.length);

}).post("/foods/menu", (req,res) => {

    const food = req.query.food;
    foodInBasket.push(food);

    console.log(foodInBasket.length);
});
// Exporting the `foodController` as a javascript object.
module.exports = foodController;