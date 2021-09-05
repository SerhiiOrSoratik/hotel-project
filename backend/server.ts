import express from "express";
import { router } from "./routes";

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  return next();
} )
app.use(express.json());

app.use(router);


app.listen(3001, () => {
  console.log("SERVER RUNING ON PORT 3001");
});
