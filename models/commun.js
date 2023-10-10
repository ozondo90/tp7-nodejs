const mongoose = require("mongoose");

const communSchema = new mongoose.Schema({
  name : string
});

const Commun = mongoose.model("Commun" , communSchema);

module.exports = Commun; 