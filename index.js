const express = require('express');
const app = express();
const fs = require("fs");
const { v4: uuid4 } = require("uuid");
const mongoose = require("mongoose");
const Blog = require('./models/blog')
const Comments = require('./models/comments')
app.use(express.json());
const dbURI =
  "mongodb+srv://ringabire:A8xLdQVosnkaOipU@cluster0.bw0on.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0";
const readData = () => {
  try {
    const data = fs.readFileSync("data.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error.message);
  }
};
const readerData = ()=> {
  try {
    const data = fs.readFile('data.json', 'utf-8')
    return JSON.parse(data)
  }catch (error) {
    console.log(error.message);
  }
}
const writeData = (data) => {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
};
app.get("/comment", (request, response) => {
  const comments = new Comments({
    title: "My comments matters",
    name: "Ramona"
  })

  comments.save().then((result) => {
    response.send(result)
  }).catch((error) => console.log(error))
})
app.get("/add-blog", (request, response) => {
  const blog = new Blog({
    title: 'new blog',
    snippet: 'updates2',
    body: "Add more content please"
  });
  blog.save().then((result) => {
    response.send(result)
  }).catch((error) => console.log(error))
});
app.get("/all-blogs", (request, response) => {
  Blog.find().then((result) => {
    response.send(result)
  })
})
app.post("/", (request, response) => {
  const items = readData();

  const newItems = { id: uuid4(), ...request.body };
  items.push(newItems);

  writeData(items);
  response.status(201).json(newItems);
});
const port = 3000
mongoose.connect(dbURI).then(() => app.listen(port)).catch((error) => console.log("error faced"));

// app.listen(port, () => {
//   console.log("CRUD Exercise");
// });
