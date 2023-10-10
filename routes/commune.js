var express = require("express");
const { store , index, show} = require("../controllers/communesControllers");
var router = express.Router();

router.post("/" , store);
router.get("/" , index);
router.get("/:commId" , show);

module.exports = router;