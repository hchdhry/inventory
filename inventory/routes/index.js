var express = require('express');
var router = express.Router();

const item_controller = require("../controller/itemcontroller")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/create",item_controller.createitem)
router.get("/view",item_controller.viewitem)
router.get("/update",item_controller.updateitem)
router.get("/delete",item_controller.deleteitem)

module.exports = router;
