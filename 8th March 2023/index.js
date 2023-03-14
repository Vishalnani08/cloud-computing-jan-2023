const os = require('os')
const express = require("express");
const app = express();

app.use(express.json())

const persons = [{
    id: 1,
    name: 'person1',
    email: 'person1@gmail.com',
    password: 'p1@erson1',
}, {
    id: 2,
    name: 'person2',
    email: 'person2@gmail.com',
    password: 'p2@erson2',
}, {
    id: 3,
    name: 'person3',
    email: 'person3@gmail.com',
    password: 'p2@erson2',
}];

app.get('/persons/:id?', (req, res) => {

    if (req.params && req.params.id) {
        if (Number(req.params.id) > 3) {
            return res.status(200).json({ msg: 'Only 3 users are present' });
        }

        console.log(Number(req.params.id))
        return res.status(200).json(persons[Number(req.params.id) - 1]);    
    }

    return res.status(200).json(persons);
})

app.get("/osinfo", (req, res) => {
    return res.status(200).json(os.cpus());
});

app.get("/string", (req, res) => {
  return res.status(200).send("This is a string not html");
});

app.get("/simpleHtml", (req, res) => {
  return res.status(200).send("<h1 id='hello'>This is simple HTML not string</h1>");
});

app.get("/hello", (req, res) => {
  return res.status(200).send(`
    <!DOCTYPE html>
<html>
<head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
<body>

<h2>HTML Table</h2>

<div class='breakingBad'>Breaking Bad</div>

<br/>

<div class='breakingBad'>Silicon Valley</div>

<br/>

<div id = 'betterCallSaul'>Better Call Saul</div>

<br/>
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>

</body>
</html>

`);
});

app.listen(9002, () => {
  console.log("App running on port 9002");
});