const express = require("express");
const env = require("dotenv").config();
const dbConnect = require("./config");
const app = express();
const PORT = process.env.PORT || 5000;


dbConnect()

app.use(express.json());
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/projects",require("./routes/projectsRoutesHandler"))

app.listen(PORT, () => {
  console.log(`running server on port ${PORT}`);
});
