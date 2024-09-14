const express = require("express");
const app = express();
const fs = require("fs");
const{v4:uuid4} = require("uuid")
const mongoose = require("mongoose")

app.use(express.json())
const readData = () => {
  try {
    const data = fs.readFileSync("data.json", "utf-8");

    return JSON.parse(data)
  } catch (error) {
    console.log(error.message);
  }
};

const writeData = (data) => {
 fs.writeFileSync("data.json", JSON.stringify(data, null, 2))
}

app.get("/", (request, response) => {
  const items = readData();
  response.status(200).json(items);
});

app.post("/", (request,response) => {
  const items = readData()

  const newItems = {id:uuid4(), ...request.body}
  items.push(newItems)
  writeData(items)
  response.status(201).json(newItems)

})
const port = 3000;
app.listen(port, () => {
  console.log("CRUD Exercise");
});
