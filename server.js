const express = require("express");
const env = require("dotenv").config();
const dbConnect = require("./config");
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require('cors');

dbConnect()

app.use(express.json());
app.use(cors())
app.use("/api/", require("./routes/contactRoutes"));
app.use("/api/projects",require("./routes/projectsRoutesHandler"))
app.use("/api/",require("./routes/registerRoutes"))



app.listen(PORT, () => {
  console.log(`running server on port ${PORT}`);
});
