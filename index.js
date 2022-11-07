import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const users = [];



app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  const newUser = {
    username,
    avatar,
  };

  users.push(newUser);

  res.send(users);
});

const tweets = [];

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  const { avatar } = users.find((u) => (u.username === username));
  const newTweet = {
    username,
    avatar,
    tweet,
  };

  tweets.push(newTweet);

  res.send(tweets);
});

app.get("/tweets", (req, res) => {
  

  res.send(tweets);
});

app.listen(5000, () => console.log("App running in port: 5000"));
