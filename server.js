const express =  require("express");
const bodyParser = require("express");
const path =  require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.post("/", (req, res) => {
  const { number1, number2 } = req.body;
  const sum = +number1 + +number2;
  res.send({ sum });
});

// React-Application Page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
