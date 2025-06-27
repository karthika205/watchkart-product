const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo Connected"))
  .catch((err) => console.error("Mongo Error:", err));
const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number
});
const Item = mongoose.model("Item", itemSchema);
app.post("/items", async (req, res) => {
  const { name, quantity } = req.body;
  const newItem = new Item({ name, quantity });
  const savedItem = await newItem.save();
  res.json(savedItem);
});
app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});
app.put("/items/:id", async (req, res) => {
  const { name, quantity } = req.body;
  const updatedItem = await Item.findByIdAndUpdate(
    req.params.id,
    { name, quantity },
    { new: true }
  );
  res.json(updatedItem);
});
app.delete("/items/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
