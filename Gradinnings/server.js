const express = require("express");
const db = require("./config/db");
const port = 5000;
const routes = require("./routes/Addcollege");
const bodyParser = require("body-parser");
const router = require("./controller/test");
const cors = require("cors");
const collegeRoutes = require("./controller/getCollege");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routes);
app.use("/api", router);
app.use("/api", collegeRoutes);

app.listen(port, async () => {
 try {
  await db;
  console.log("Connected to Database");
 } catch (e) {
  console.log("Not Connected to Database");
 }
 console.log(`Server is running at port ${port}`);
});
