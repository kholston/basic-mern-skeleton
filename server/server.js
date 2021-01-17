import "dotenv/config";
import app from "./express";

const port = process.env.port || 3000;

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.info(`Server started on port ${port}`);
});
