const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controller/errorController");

const port = process.env.port || 8000;

const NoteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DBURL).then(() => {
    console.log('Database connected Successfully');
}).catch((e) => { console.log(e) });

app.get("/", (req, res) => {
    res.send("Hallelujha");
});
app.use("/api/v1/note", NoteRouter);
app.use("/api/v1/user", userRouter);
app.all('*', (req, res, next) => {
    // res.status(404).json({
    //     status: "failed",
    //     message: `can't find ${req.originalUrl} on this server!`

    // });
    next(new AppError(`can't find ${req.originalUrl} on this server!`, 404
    ));
})

app.use(globalErrorHandler);
app.listen(port, console.log(`GOd is with me...at port:${port}`));