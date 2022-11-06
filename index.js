import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  const newUser = {
    id: users.length + 1,
    username,
    avatar,
  };

  users.push(newUser);

  res.send("OK");
});

const tweets = [];

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  const newTweet = {
    id: tweets.length + 1,
    username,
    tweet,
  };

  tweets.push(newTweet);

  res.send("OK");
});

app.get("/tweets", (req, res) => {
  const { username, avatar, tweet } = req.query;
  const oldTweet = {
    username,
    avatar,
    tweet,
  };

  tweets.push(oldTweet);

  res.send(tweets);
});

app.listen(5000, () => console.log("App running in port: 5000"));
