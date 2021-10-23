let express=require("express");
let router=express.Router();
let mongoose=require('mongoose');

//connect to our book model
let Book =require('../models/book');

/*Get Route for the Book list page- READ operation*/
router.get('/',(req,res,next)=>{
    Book.find((err,BookList)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
           // console.log(BookList);

           res.render('book/list.ejs', {title:'Books', BookList:BookList})
        }
    });

});

/*Get Route for the Add page- CREATE operation*/
router.get('/add', (req, res, next)=>{
    res.render('book/add', {title: 'Add Books', BookList: BookList})
});

/*Post Route for the Add page- CREATE operation*/
router.post('/add', (req, res, next)=>{

});

/*Get Route for the Edit page- UPDATE operation*/
router.get('/edit/:id', (req, res, next)=>{

});

/*Post Route for the Edit age- UPDATE operation*/
router.post('/edit/:id', (req, res, next)=>{

});

/*Get to perform Deletion- DELETE operation*/
router.get('/delete/:id', (req, res, next)=>{

});

module.exports=router;