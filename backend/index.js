const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./Todo");

const PORT = 4000;
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/mern", { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("MongoDB started");
});

app.use(cors());
app.use(express.json());

app.post("/create", (req, res) => {
  const todo = new Todo(req.body);

  todo
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
    console.log(todo)
});

app.get("/", (req, res) => {
  Todo.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/:id", (req, res) => {
  const id = req.params.id
  Todo.findById(id, (err, todo)=>{
    res.json(todo)
  })
    
});

app.patch("/:id", (req, res) => {
  const id = req.params.id
  Todo.findById(id, (err, todo)=>{
    todo.text= req.body.text
    todo.save().then((result)=>{
      res.send(result)
    })
  })
    
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
