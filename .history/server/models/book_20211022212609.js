let mongoose=require('mongoose');

//create model class
let bookModel=mongoose.Schema({
    name:String,
    email:String,
    number: Number
},
{
    collection:"books"
});

module.exports=mongoose.model('Book',bookModel);