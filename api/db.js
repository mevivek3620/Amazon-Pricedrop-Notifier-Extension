const mongoose = require('mongoose');
const url = "mongodb://localhost/amazon-pricedrop-notifier"


const MongoServer = async () => {
    try {
      await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex:true,
        useUnifiedTopology: true,
        useFindAndModify:false
      });
      console.log("Connected to DB !!");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  
module.exports = MongoServer;