/* Creating a server in ExpressJS */
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

const details = {
  name: "Christopher Nolan",
  title: "Director",
  college: "University of London",
  imageUrl: "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_FMjpg_UX1000_.jpg",
};

app.get("/profile", function (req, res) {
  return res.status(200).send(details.imageUrl);
});

app.listen(3333, function () {
  console.log(`App running on port 3333`);
});
