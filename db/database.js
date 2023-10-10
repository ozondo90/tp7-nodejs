const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://127.0.0.1:27017/countrycartdb', {
  useNewUrlParser : true,
  useUnifiedTopology : true
})
.then(
  ()=>{
    console.log("app is connect to the database")
  }
)
.catch(
  (error)=>{
    console.log(error);
  }
);

module.exports = db;