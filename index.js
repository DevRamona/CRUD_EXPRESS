const express = require("express");
const app = express();
const fs = require("fs");
const{}
const readData = ()=>{
  try {
    const data = fs.readFileSync("data.json", "utf-8")
    return JSON.parse(data)
  }catch(error) {
    console.log(error.message)
  }
}

app.get("/", (request, response)=>{
  const items = readData()
  response.status(200).json(items)
})

const port = 3000;
app.listen(port, () => {
  console.log("CRUD Exercise");
});
