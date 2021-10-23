let express=require("express");
let router=express.Router();
let mongoose=require('mongoose');

//connect to our book model
let Book =require('../models/book');

/*Get Route for the Book list page- READ operation*/
router.get('/', bookController.displayBookList);

/*Get Route for displaying Add page- CREATE operation*/
router.get('/add', bookController.displayAddPage);

/*Post Route for processing Add page- CREATE operation*/
router.post('/add', bookController.processAddPage);  

/*Get Route for processing the Edit page- UPDATE operation*/
router.get('/edit/:id',bookController.displayEditPage);

/*Post Route for displaying the Edit age- UPDATE operation*/
router.post('/edit/:id', bookController.processEditPage);

/*Get to perform Deletion- DELETE operation*/
router.get('/delete/:id', bookController.performDelete);

module.exports=router;