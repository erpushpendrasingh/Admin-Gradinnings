// Import necessary modules
const express = require("express");
const College = require("../models/Collegemodel");
const router = express.Router();
// Import your College model

// Define a route to get scraped data
router.get("/colleges", async (req, res) => {
 try {
  // Fetch all colleges from the database
  const colleges = await College.find();
  res.json(colleges);
 } catch (error) {
  console.error("Error fetching colleges:", error);
  res.status(500).send("Internal Server Error");
 }
});

// Export the router
module.exports = router;
