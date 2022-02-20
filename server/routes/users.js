/* users.js
Students's name: Parambir Singh
StudentID: 301175171
Date: 12 Feb, 2021
*/

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
