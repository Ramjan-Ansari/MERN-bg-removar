import 'dotenv/config'
import express from "express";
import cors from 'cors'
import connectDb from './configs/mongodb.js';
import userRouter from './routes/userRoute.js';

//App config
const PORT = process.env.PORT || 4000
const app = express();
await connectDb();

//API route
app.get("/", (req, res)=>{
    res.send("API Working");
});
app.use("/api/user",userRouter)

//initialize  middleware
app.use(express.json(), cors());
// app.use(cors());
await connectDb();


app.listen(PORT, (req, res)=>{
    console.log("server running on port"+PORT);
})