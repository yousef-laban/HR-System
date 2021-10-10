const mongoose = require("mongoose");

const connectDB = async () => {
  const uri =
    "mongodb+srv://youseflaban:9687324623@cluster0.c7lj0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const conn = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
};

module.exports = connectDB;
