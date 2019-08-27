// ip4 address is crucial for other devices besides local to reach the server!

const port = process.env.PORT || 4000;
const ipv4addrHome = "192.168.1.34";
const ipv4addrPhone = "192.168.43.107";

const path = require('path');
const express = require('express');
// Body-Parser is required to parse parameters from all http/s/2 requests.
const bodyParser = require('body-parser');
const app = express();
// Serving assets as a static directory is a must!
const dir = path.join(__dirname, 'assets/images');

// Controllers to be added as middleware to Express MVC.
const foodController = require("./controllers/food_controller");
const profileController = require("./controllers/profile_controller");

// Middlewares to be used by Express MVC.
app.use(express.static(dir));
app.use(bodyParser.urlencoded({extended: false}));
app.use(foodController);
app.use(profileController);

// Our Express app will start listening at the specified port at .env file.
app.listen(port, ipv4addrPhone, () => {
    console.log(`Server has started on port ${port}.`);
});