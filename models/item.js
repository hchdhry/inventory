const mongoose = require("mongoose")

const scheme = mongoose.Schema

const itemschema = new scheme({
name:{typre:String,required:true, maxLength:100 },
description:{type:String,maxLength:300},
category:{type:String,maxLength:50 },
price:{type:Number,min:0},
stock:{type:Number,min:0},
URL:{type:String}
})

module.exports= mongoose.model("item",itemschema)




//a name, description, category, price, number-in-stock and URL,//
