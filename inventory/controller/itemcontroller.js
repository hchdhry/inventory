const item = require("/Users/hassan/TOP/node/store_inventory/inventory/models/item.js")
const asyncHandler = require("express-async-handler");


exports.createitem = async (req,res) => {
res.send("not implemented:create item")
}

exports.viewitem = asyncHandler(async (req, res, next) => {
    const allItems = await item.find({}, "name price")
    .sort({ name: 1 })
    .exec();
  
    res.render("item", { title: "Items", viewitem: allItems });
  });

exports.updateitem = async (req,res) => {
    res.send("not implemented:update item")

}
        
exports.deleteitem = async (req,res) => {
    res.send("not implemented:delete item")
    }
    