require("./Database/connection");
const cors = require("cors")
const express = require("express");

const bookRoute = require("./Routes/book.route")
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}))
app.use("/api/books",bookRoute);


app.listen(port,()=>{
  console.log(`The app is running at port no: ${port}`);
})