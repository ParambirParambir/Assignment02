/* users.js
Students's name: Arshpreet Singh
StudentID: 301174738
Date: 22 October, 2021
*/

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
