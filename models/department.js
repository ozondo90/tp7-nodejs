const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  depId : Number,
  name : String
});

const Department = mongoose.model("departments", departmentSchema)

module.exports = Department;