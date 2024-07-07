const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(
      "mongodb+srv://omswastikfashion405:omswastikfashion@soundbaba.qx4exbt.mongodb.net/Flipkart?retryWrites=true&w=majority&appName=SoundBaba",
      {
        useNewUrlParser: true,
      }
    ) 
    .then(() => {
      console.log("Mongoose Connected");
    });
};

module.exports = connectDatabase;
