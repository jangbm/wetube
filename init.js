import "./db"
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Videos";
import "./models/Comment";

const PORT = process.env.PORT || 4000;

const handlelistening = ()=>{
    console.log(`Listening on : http://localhost:${PORT}`);
}

app.listen(PORT, handlelistening);