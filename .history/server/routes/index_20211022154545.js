var express = require('express');
var router = express.Router();

let indexController=require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About us page. */
router.get('/', indexController.displayAboutPage);

/* GET Products page. */
router.get('/', indexController.displayProductsPage);

/* GET Services page. */
router.get('/', indexController.displayServicesPage);

/* GET Contact page. */
router.get('/', indexController.displayContactPage);


