const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});
//Código nuevo
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://micawendy1:<Nuvneubvnr34>@cluster0.fpnqe.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(uri, {useUnifiedTopology: true }, (err, client) => {
  if (err) console.log("Error occurred connecting to MongoDB...");
  console.log("Connected to MongoDB!");
});
//Fin código nuevo
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

