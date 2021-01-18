import "dotenv/config";
import app from "./express";
import mongoose from "mongoose";
import config from "./../config/config";

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.info("MongoDB succesfully connected");
});
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

app.listen(config.port, (error) => {
  if (error) {
    console.log(error);
  }
  console.info(`Server started on port ${config.port}`);
});
