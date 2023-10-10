const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name : string
});

const Department = mongoose.model("Department", departmentSchema)

module.exports = Department;