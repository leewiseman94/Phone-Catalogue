// * Index.js

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = 8000;
const phonesRouter = require("./routes/phones");


app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/phones", phonesRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
module.exports = app;

