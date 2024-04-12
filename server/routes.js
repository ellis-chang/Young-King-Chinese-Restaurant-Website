const express = require("express");
const router = express.Router();
const { getConnectedClient } = require("./database");
const {ObjectId} = require("mongodb");

const getCollection = () => {
  const client = getConnectedClient();
  const collection = client.db("emailsDB").collection("emails");
  return collection;
};

router.post("/send", async (req, res) => {
  const collection = getCollection();
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ msg: "error no object found" });
  }

  const newEmail = await collection.insertOne({ name, email, subject, message });

  res.status(201).json({ name, email, subject, message, _id: newEmail.insertedId });
  //res.status(200).json({ msg: "POST REQUEST TO /send" })
});



module.exports = router;
