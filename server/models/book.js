/* book.js
Students's name: Parambir Singh
StudentID: 301175171
Date: 12 Feb, 2021
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