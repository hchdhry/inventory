const item = require("../models/item");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.createitem_get = async (req, res) => {
  res.render("create", { title: "Add item" });
};

exports.createitem_post = [
  body("name", "Item name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // Handle validation errors
      // Render the form with sanitized values/error messages
      res.render("create", {
        title: "Add item",
        errors: errors.array(),
      });
      return;
    }

    // Data from form is valid
    const newItem = new item({ name: req.body.name });
    await newItem.save();

    // Redirect or send a response
    res.redirect("/create");

    // newItem.save();

    // Redirect or send a response
    // res.redirect("/items");
    // or
    // res.send("Item created successfully");
  }),
];

exports.viewitem = asyncHandler(async (req, res, next) => {
  const allItems = await item.find({}, "name price").sort({ name: 1 }).exec();

  res.render("item", { title: "Items", viewitem: allItems });
});

exports.updateitem = async (req, res) => {
  res.send("Not implemented: Update item");
};

exports.deleteitem = async (req, res) => {
  res.send("Not implemented: Delete item");
};
