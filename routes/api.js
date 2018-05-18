const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname.replace("routes", "") + "index.html");
});

// default query for now on slash path - just log some topics
app.get("/", function(req, res) {
  session
    .run("MATCH(topic:Topic) RETURN topic LIMIT 25")
    .then(result => {
      result.records.forEach(record => console.log(movie));
    })
    .catch(err => console.log);

  res.send("ENTER THE FLASHCUBE");
});

router.use("/*", (req, res, next) => {
  next({ status: 404 });
});

module.exports = router;
