const Department = require("../models/department");

const store = async (req, res) => {
  const jsonData = req.body;

  if (jsonData) {
    const newDepartment = new Department(jsonData);
    await newDepartment
      .save()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: "error on saving the data" });
      });
  }
};

const index = async (req, res) => {
  const depList = await Department.find();

  if (depList) {
    try {
      res.status(200).json(depList);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(404).json({ error: "resources not found}" });
  }
};

const show = async (req, res) => {
  var depId = req.params.id;  
  if (depId) {
    try {
      const depItem = await Department.findOne({"depId" : depId});

      if (!depItem) {
        // Department with the specified ID was not found
        return res.status(404).json({ error: "Department not found" });
      }

      res.json(depItem);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(400).json({ error: "Invalid department ID" });
  }
};

module.exports = { store, index, show };
