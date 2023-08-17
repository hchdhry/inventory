const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, maxLength: 300 },
  category: { type: String, maxLength: 50 },
  price: { type: Number, min: 0 },
  stock: { type: Number, min: 0 },
  URL: { type: String },
});

module.exports = mongoose.model("item", itemSchema);
