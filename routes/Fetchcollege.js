const express = require("express");
const College = require("../models/Collegemodel");
const router = express.Router();
// Import your College model

// Define a route to get scraped data
// Define a route to get scraped data filtered by city
router.get("/colleges", async (req, res) => {
    try {
      const city = "Delhi"; // Extract city from query parameters
  
      // Check if city is provided
      if (!city) {
        return res.status(400).json({ error: "City parameter is missing" });
      }
  
      // Fetch colleges from the database based on the city
      const colleges = await College.find({ city: city });
  
      // Check if colleges exist
      if (!colleges || colleges.length === 0) {
        return res.status(404).json({ error: "No colleges found for the provided city" });
      }
  
      // Send the colleges as JSON response
      res.json(colleges);
    } catch (error) {
      console.error("Error fetching colleges:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  // Export the router
  module.exports = router;
  

// Export the router
