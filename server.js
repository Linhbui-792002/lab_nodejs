import express from "express";
import * as dotenv from "dotenv";
import tutorialsRouter from "./routes/tutorials.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/tutorials", tutorialsRouter);

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  console.log(`server is runing on : http://localhost:${port}`);
});
