const mongoose = require("mongoose");
const Department = require("./department");

const communeSchema = new mongoose.Schema({
  commId : Number,
  name : String,
  depId : Number,
  dep : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Department"
  }
});

const Commune = mongoose.model("communes" , communeSchema);

module.exports = Commune; 