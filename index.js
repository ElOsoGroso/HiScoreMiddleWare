const express = require("express");
const hiscores = require("osrs-json-hiscores");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/stats/:rsn", (req, res) => {
  hiscores
    .getStatsByGamemode(req.params.rsn)
    .then(response => res.send(response))
    .catch(err => {
      res.status(404).send({ status: 404, error: err });
    });
});

const server = app.listen(process.env.PORT, function(){
  const port = server.address().port;
 console.log('We are on this port:', port);