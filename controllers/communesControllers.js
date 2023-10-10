const Commune = require("../models/commune");

const store = async (req, res) => {
  const jsonData = req.body;

  if (jsonData) {
    const newCommune = new Commune(jsonData);
    try{
      await newCommune
      .save()
      .then(res.json(jsonData))
    } 
    catch(err){
      res.json(err);
    };
  }
};

const index = async(req, res)=>{
  const commList = await Commune.find();
  if(commList){
    try{
      res.status(200)
       .json(commList);
    }
    catch(error){
      res.status(500)
         .json(error)
    }
  }else{
    res.status(404)
       .json({"error" : "resources not found}"})
  }
  
}

const show = async (req, res) => {
  var commId = req.params.commId;  
  if (commId) {
    try {
      const commItem = await Commune.findOne({"commId" : commId});

      if (!commItem) {
        // Commune with the specified ID was not found
        return res.status(404).json({ error: "Commune not found" });
      }
      res.json(commItem);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(400).json({ error: "Invalid commune ID" });
  }
};

module.exports = {store , index, show};
