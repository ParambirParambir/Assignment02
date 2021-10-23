/* book.js
Students's name: Arshpreet Singh
StudentID: 301174738
Date: 22 October, 2021
*/

let mongoose=require('mongoose');

//create model class
let bookModel=mongoose.Schema({
    name:String,
    author:String,
    published: String,
  
},
{
    collection:"books"
});

module.exports=mongoose.model('Book',bookModel);