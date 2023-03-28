const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <style>
        body {
            background-color: black;
            color: whitesmoke;
            // background-image: url('https://todo-app-cc.s3.ap-south-1.amazonaws.com/david-marcu-78A265wPiO4-unsplash.jpg');
            // opacity: 1%;
        }
    </style>
</head>

<body>
    <center>
    <img src="https://todo-app-cc.s3.ap-south-1.amazonaws.com/david-marcu-78A265wPiO4-unsplash.jpg" alt="Test Image" height="25%" width="100%">
        <br><br>
        <form action="/todos" method="POST">
            <label for="todo_task">Add your Todo Task</label>
            <br><br>
            <input type="text" id="todo_task" name="todo_task">
            <br><br>
            <input type="submit" value="Submit">
        </form>
        <br>
        <hr>
        <h3>Todo List</h3>
        <ul id="list"></ul>


        <script>
            function getTodosList() {
                const requestOptions = {
                    method: 'GET',
                    redirect: 'follow',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                };

                fetch("http://localhost:9600/todos", requestOptions)
                    .then(response => response.json())
                    .then(todos => {
                        const list = document.getElementById('list');
                        todos.forEach(todo => {
                            const li = document.createElement('li');
                            li.textContent = todo.id + ' - ' + todo.todo_task + ' - ' + new Date(todo.created_at).toLocaleDateString();
                            list.appendChild(li);
                        });
                    })
                    .catch(error => console.log('error', error));
            }
            getTodosList();
        </script>
    </center>
</body>

</html>`;

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const { Pool } = require("pg");
const app = express();
const PORT = 9600;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("AMP-Access-Control-Allow-Source-Origin", "dev-test@aerchain.io");
  res.header(
    "Access-Control-Expose-Headers",
    "AMP-Access-Control-Allow-Source-Origin"
  );
  return next();
});

const client = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "1234",
  database: "IMDB",
  max: 10,
  min: 2,
});

app.post("/todos/:id?", async (req, res) => {
  const { todo_task } = req.body;

  const todos = await client.query(`select * from todos`);
  if (!(todos && Array.isArray(todos.rows) && todos.rows)) {
    return res.status(200).json({
      message: "No data available",
    });
  }

  const newTodoId = todos.rowCount + 1;
  await client.query(`insert into todos values(${newTodoId}, '${todo_task}')`);
  const redirectUrl = "http://localhost:9600/todo-list"; // Default to homepage
  return res.redirect(redirectUrl);
});

app.get("/todos", async (req, res) => {
  const response = await client.query(`select * from todos`);

  if (!(response && Array.isArray(response.rows) && response.rows)) {
    return res.status(200).json({
      message: "No data found",
    });
  }

  return res.status(200).json(response.rows);
});

app.get("/todo-list", async (req, res) => {
  return res.status(200).send(html);
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  return res.status(200).send({ msg: "You're logged in" });
});

app.post("/aerchain", async (req, res) => {
  console.log('\n\n\n req.body');
  console.log(req.body);
  console.log('\n\n\n req.query');
  console.log(req.query);
  console.log('\n\n\n req.params');
  console.log(req.params);
  return res.status(200).send({ msg: "You're logged in" });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
