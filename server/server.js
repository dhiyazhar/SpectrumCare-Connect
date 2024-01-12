import express from "express";
import cors from "cors";
import Users from "./config/database.js";
import {
	doc,
	addDoc,
	setDoc,
	getDoc,
	getDocs,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
	const querySnapshot = await getDocs(Users);
	const list = [];
	querySnapshot.docs.forEach((doc) => {
		list.push({ id: doc.id, ...doc.data() });
	});
	res.send(list);
});

app.post("/test", (req, res) => {
    const data = req.body;
    res.send({"this is your data" : data})
})

app.post("/create", async (req, res) => {
	const data = req.body;
	await addDoc(Users, { data });
	res.send({ msg: "Users Added" });
});

app.post("/update", async (req, res) => {
	const id = req.body.id;
	delete req.body.id;
	await updateDoc(doc(Users, id), req.body);
	res.send("data udated");
});

app.post("/delete", async (req, res) => {
	const id = req.body.id;
	await deleteDoc(doc(Users, id));
	res.send({ msg: "data deleted" });
});

app.listen(4000, () => {
	console.log("Server start at port 4000");
});
