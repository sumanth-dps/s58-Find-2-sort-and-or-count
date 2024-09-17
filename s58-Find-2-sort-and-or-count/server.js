const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/getEmployees", async (req, res) => {
  let employeesData = await Employee.find().distinct("country"); //.sort("department country"); //.select("-email -id"); //.and([
  //{ country: "China" },
  //{ gender: "Male" },
  //{ age: { $gte: 18, $lte: 40 } },
  //]);
  //.countDocuments();
  res.json(employeesData);
});
app.listen(4567, () => {
  console.log("Listening to port 4567");
});
let employeeSchema = new mongoose.Schema({
  id: Number,
  profilePic: String,
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
  gender: String,
  department: String,
  country: String,
});
let Employee = new mongoose.model("employee", employeeSchema);

let connectToMDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://sumanthdps:sumanth@mern2406.9fvsa.mongodb.net/Tata?retryWrites=true&w=majority&appName=Mern2406"
    );
    console.log("Succcesfully connected to MongoDB");
  } catch (err) {
    console.log(err);
    console.log("unable to connect to MongoDB");
  }
};
connectToMDB();
