const express = require("express");
const { dirname } = require("path");
const app = express();
const port = 3000;
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log("Hello Word");
}).get('/about', (req, res) => {
  res.send('about');
  console.log("About");
}).put('/', (req, res)=>{
  res.send('put request')
  console.log("put request")
})
app.get("/index", (req, res) => {
  console.log("Hey its index")
  res.sendFile('template/index.html', { root: __dirname })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
