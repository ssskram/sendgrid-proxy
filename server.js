const express = require("express");
const bodyParser = require("body-parser");
const bearerToken = require("express-bearer-token");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const checkToken = require("./token");
const fetch = require("node-fetch");
global.Headers = fetch.Headers;

// import env variables
require("dotenv").config();

// start express
var app = express();
app.set("port", process.env.PORT || 3000);

// body parser
app.use(
  bodyParser.json({
    limit: "50mb"
  })
);

// enable cors on all requests
app.use(cors());

// logging
app.use(require("morgan")("combined"));

// docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// bearer token
app.use(bearerToken());

// access control
app.use((req, res, next) => {
  const valid = checkToken(req.token);
  if (valid == true) {
    next();
  } else {
    res.status(403).end();
  }
});

// routes
app.use("/sendMail", require("./routes/sendMail"));

// Production error handler
if (app.get("env") === "production") {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});
