const express = require("express");
const College = require("../models/Collegemodel");
const router = express.Router();

router.get("/test", async (req, res) => {
  try {
    const colleges = await College.find();
    res.status(201).send({message:"get",colleges:colleges});
  } catch (error) {
    res.status(500).send({message:error});
  }
});

router.post("/test", async (req, res) => {
  try {
    const college = new College(req.body);
    await college.save();
    res.status(201).send(college);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
