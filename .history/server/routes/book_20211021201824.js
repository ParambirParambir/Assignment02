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
    res.render('book/add', {title: 'Add Books'})
});

/*Post Route for the Add page- CREATE operation*/
router.post('/add', (req, res, next)=>{
    let newBook=Book(
        {
            "name":req.body.name,
            "author":req.body.author,
            "published":req.body.published,
            "description": req.body.description,
            "price": req.body.price
        }
    );
    Book.create(newBook, (err, Book)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.redirect('/book-list');
        }
    })
});

/*Get Route for the Edit page- UPDATE operation*/
router.get('/edit/:id', (req, res, next)=>{
    let id=req.params.id;

    Book.findById(id, (err, bookToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.render('book/edit', {title:'Edit Book', book:bookToEdit})
        }
    });
});

/*Post Route for the Edit age- UPDATE operation*/
router.post('/edit/:id', (req, res, next)=>{
    let id=req.params.id
    
    let updateBook=Book
    (
        {
            "_id":id,
            "name":req.body.name,
            "author":req.body.author,
            "published":req.body.published,
            "description": req.body.description,
            "price": req.body.price
        }
    );
    Book.updateOne({_id:id},updateBook, (err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.redirect('/book-list');
        }
    });
});

/*Get to perform Deletion- DELETE operation*/
router.get('/delete/:id', (req, res, next)=>{
    let id=req.params.id;

    Book.remove({_id:id}, (err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.redirect('/book-list');
        }
        });
    });

module.exports=router;