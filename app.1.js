const express = require("express");
const apiRouter = require("./routes/api");
const bodyParser = require("body-parser");
const neo4j = require("neo4j-driver").v1;
const driver = neo4j.driver(
  "bolt://localhost",
  neo4j.auth.basic("neo4j", "flashcube")
);
const app = express();
const session = driver.session();

console.log("APP.JS CALLED");

app.use(bodyParser.json());

app.use("/api", apiRouter);

// SET UP QUERY - WORKED
const personName = "Sean";
const resultPromise = session.run("CREATE (a:Person {name: $name}) RETURN a", {
  name: personName
});

resultPromise
  .then(result => {
    session.close();
    const singleRecord = result.records[0];
    const node = singleRecord.get(0);
    console.log(node.properties.name);
    driver.close();
  })
  .catch(console.log);

module.exports = app;
