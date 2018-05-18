const neo4j = require("neo4j-driver").v1;
const driver = neo4j.driver(
  "bolt://localhost",
  neo4j.auth.basic("neo4j", "flashcube")
);

function addUser(newUser) {
  const session = driver.session();
  const newUserPromise = session.run(
    `CREATE (newUser:User {name: $name, firebaseId: $firebaseId, profile_img: $profile_img}) RETURN newUser`,
    {
      name: newUser.ba.displayName,
      firebaseId: newUser.sa.uid,
      profile_img: newUser.metadata.photoURL
    }
  );

  newUserPromise
    .then(result => {
      session.close();
      console.log("User Added", result);
      driver.close();
    })
    .catch(console.log);
}

function addTopic(user, newTopic) {
  // might need to create new object with properties of both user and newTopic if the session.run can only take the one properties object
  const session = driver.session();
  const newTopicPromise = session.run(
    `CREATE (newTopic:Topic {title:$title, created_by:$created_by, language:$language})-[CREATED_BY]->(user:User{name:$name}) RETURN newTopic, user`,
    {
      newTopic: newTopic.title,
      newTopic: newTopic.created_by,
      newTopic: newTopic.language
    },
    {
      // will depend on if are using the whole ob
      user: user.name
    }
  );

  newTopicPromise
    .then(result => {
      session.close();
      console.log("Topic Added", result);
      driver.close();
    })
    .catch(console.log);
}

function addTerm(user, newTerm) {
  // might need to create new object with properties of both user and newTerm if the session.run can only take the one properties object
  const session = driver.session();
  const newTermPromise = session.run(
    `CREATE (newTerm:Term {term:$term, definition:$definition, belongs_to:$belongs_to})-[CREATED_BY]->(user:User{name:$name}) RETURN newTerm, user`,
    {
      newTerm: newTerm.title,
      newTerm: newTerm.created_by,
      newTerm: newTerm.language
    },
    {
      user: user.name
    }
  );

  newTermPromise
    .then(result => {
      session.close();
      console.log("Topic Added", result);
      driver.close();
    })
    .catch(console.log);
}

function createTermStudyingRel(user, term) {
  const session = driver.session();
  const newStudyRelPromise = session.run(
    `MATCH (user:User{name: $name}), (term:Term{term:$term}), CREATE UNIQUE (user)-[rel:IS_STUDYING]->(term)`,
    // NEED TO KNOW WHAT user AND TERM are looking like on the front end at this point...
    {
      name: user.name
    }
  );

  newStudyRelPromise
    .then(result => {
      session.close();
      console.log("student :IS_STUDYING term relationship added", result);
      driver.close();
    })
    .catch(console.log);
}

function createTopicStudyingRel(user, topic) {
  const session = driver.session();
  const newStudyRelPromise = session.run(
    `MATCH (user:User{name: $name}), (topic:Topic{topic:$title}), CREATE UNIQUE (user)-[rel:IS_STUDYING]->(topic)`,
    {
      name: user.name
    }
  );

  newStudyRelPromise
    .then(result => {
      session.close();
      console.log("student :IS_STUDYING topic relationship added", result);
      driver.close();
    })
    .catch(console.log);
}

module.exports = {

  newStudyRelPromise, createTopicStudyingRel, createTermStudyingRel, addTerm, addTopic, addUser

}
