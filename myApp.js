let express = require("express");
let app = express();

const sayHello = (req, res) => {
  res.send("Hello Express");
};

app.get("/", sayHello);

module.exports = app;
