const College = require("../models/Collegemodel"); // Assuming you have a College model
const axios = require("axios");
const cheerio = require("cheerio");

// Controller function to add scraped data to MongoDB
const addScrapedDataToMongoDB = async (req, res) => {
  const url = "https://www.collegedekho.com/colleges/iit-kharagpur";

  console.log(req.body);

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // Define an object to store the scraped data
    let collegeData = {};

    // Extract data from all sections
    $(".block.box").each((sectionIndex, sectionElement) => {
      const sectionTitle = $(sectionElement).find("h2").text().trim();
      const sectionData = {};

      // Extract data from the overview section
      const overviewData = $(sectionElement)
        .find(
          ".collegeDetail_classRead__yd_kT .collegeDetail_overview__Qr159 p"
        )
        .text()
        .trim();
      sectionData.overview = overviewData;

      // Extract data from all tables in the section
      const tables = $(sectionElement).find(
        " .collegeDetail_classRead__yd_kT .scrollTable  table "
      );

      if (tables.length > 0) {
        // ...

        const tableData = tables
          .map((tableIndex, tableElement) => {
            const tableRows = $(tableElement).find("tbody tr");

            return tableRows
              .map((rowIndex, rowElement) => {
                const course = $(rowElement)
                  .find("td:nth-child(1)")
                  .text()
                  .trim();
                const annualFees = $(rowElement)
                  .find("td:nth-child(2)")
                  .text()
                  .trim();
                const duration = $(rowElement)
                  .find("td:nth-child(3)")
                  .text()
                  .trim();

                // Check if the third column exists
                if (duration) {
                  return [[course, annualFees, duration]];
                }

                // If third column is not present, return only the first two columns
                return [[course, annualFees]];
              })
              .get();
          })
          .get();

        // Only add tables data if tables are present
        sectionData.tables = tableData;

        // ...

        // Only add tables data if tables are present
        sectionData.tables = tableData;
      }

      // Only add section to the collegeData object if it has tables or paragraphs
      if (overviewData || sectionData.tables) {
        collegeData[sectionTitle] = sectionData;
      }
    });

    // Save the scraped data to MongoDB

    // Assuming only one university's data is present

    const overview = Object.keys(collegeData)[0];
    const universityName = overview.replace(" Overview", "");
    function fetchDataByCategory(data, universityName, category) {
      const categoryKey = Object.keys(data).find(
        (key) =>
          key.toLowerCase().includes(universityName.toLowerCase()) &&
          key.toLowerCase().includes(category.toLowerCase())
      );
      return categoryKey ? data[categoryKey] : undefined;
    }

    const overviewschema = fetchDataByCategory(
      collegeData,
      universityName,
      "Overview"
    );
    const highlights = fetchDataByCategory(
      collegeData,
      universityName,
      "Highlights"
    );
    const courses = fetchDataByCategory(collegeData, universityName, "Courses");
    const admission = fetchDataByCategory(
      collegeData,
      universityName,
      "Admission"
    );
    var cutOff = fetchDataByCategory(collegeData, universityName, "Cut Off");
    var placement = fetchDataByCategory(
      collegeData,
      universityName,
      "Placements"
    );
    var scholarship = fetchDataByCategory(
      collegeData,
      universityName,
      "Scholarships"
    );
    var campusAndInfrastructure = fetchDataByCategory(
      collegeData,
      universityName,
      "Campus"
    );
    var awardsRecognitionCollaborations = fetchDataByCategory(
      collegeData,
      universityName,
      "Awards, Accreditation, Recognition and Collaborations"
    );
    var seat = fetchDataByCategory(
      collegeData,
      universityName,
      "Seat Reservation"
    );
    var Eligibility = fetchDataByCategory(
      collegeData,
      universityName,
      "Eligibility Criteria"
    );

    const body = await req.body;

    console.log(body);

    if (campusAndInfrastructure === undefined) {
      campusAndInfrastructure = req.body.campusAndInfrastructure;
    }

    if (cutOff === undefined) {
      cutOff = req.body.cutOff;
    }

    if (placement === undefined) {
      placement = req.body.placement;
    }

    const universitySchema = {
      name: universityName,
      overview: overviewschema,
      coursesarray: req.body.coursearray,
      city: req.body.city,
      Highlight: highlights,
      Courses: courses,
      Admission: admission,
      CutOff: cutOff,
      Placement: placement,
      Scholarship: scholarship,
      Campus: campusAndInfrastructure,
      Award: awardsRecognitionCollaborations,
      Seat: seat,
    };

    console.log(universitySchema);

    const newCollege = new College(universitySchema);
    await newCollege.save();

    res
      .status(200)
      .json({ message: "Scraped data added to MongoDB successfully" });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = addScrapedDataToMongoDB;
