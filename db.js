import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

const handleOpen = () => console.log("connected to db");
const handleError = (error) => console.log(`error on db Connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

//db.users.find({})
//db.users.remove({})
