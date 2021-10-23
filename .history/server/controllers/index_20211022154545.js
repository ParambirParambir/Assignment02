let express=require('express');
let router=express.Router();

/* GET home page. */
module.exports.displayHomePage=(req, res, next)=>{
    res.render('index',{title: 'Home'});
}

/* GET About page. */
module.exports.displayAboutPage=(req, res, next)=>{
    res.render('index',{title: 'About'});
}

/* GET Products page. */
module.exports.displayProductsPage=(req, res, next)=>{
    res.render('index',{title: 'Products'});
}

/* GET Services page. */
module.exports.displayServicesPage=(req, res, next)=>{
    res.render('index',{title: 'Services'});
}

/* GET Contact page. */
module.exports.displayContactPage=(req, res, next)=>{
    res.render('index',{title: 'Contact'});
}
