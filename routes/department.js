var express = require("express");
var router = express.Router();
const { store ,index , show} = require("../controllers/departmentsController");


router.post("/" , store),
router.get('/', index);
router.get('/:depId', show);


module.exports = router;