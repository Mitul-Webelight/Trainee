const express = require("express")
const app = express()

const port = 3000

app.get("/", () => {
  console.log("hello");
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
})