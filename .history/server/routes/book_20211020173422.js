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

           res.render('book.ejs', {title:'Books', BookList:BookList})
        }
    });

});

module.exports=router;