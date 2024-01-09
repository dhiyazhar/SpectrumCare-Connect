const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/api", (req, res) => {
	res.json({ users: ["user1", "user2"] });
});

app.post("/", (req, res) => {
	res.end("hello world");
});

app.listen(5000, () => console.log("sever started on port 5000"));
