const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");


const port = process.env.port || 8000;

const NoteRouter = require("./routes/noteRoutes");

app.use(express.json());
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DBURL).then(() => {
    console.log('Database connected Successfully');
}).catch((e) => { console.log(e) });

app.get("/", (req, res) => {
    res.send("Hallelujha");
})
app.use("/api/v1/note", NoteRouter);

app.listen(port, console.log(`GOd is with me...at port:${port}`));