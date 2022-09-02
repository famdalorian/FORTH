const express = require("express");
const app = express();


app.get("/", (req, res) => {
   Res.writeHead(200, { "Content-Type": "application/json" });
   Res.write(JSON.stringify({ "Status": "Working" }));
   Res.end();
});

app.listen(5000, () => {
   console.log("online")
});