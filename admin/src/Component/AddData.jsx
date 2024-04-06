import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function AddData() {
  // const [image1, setImage1] = useState(null);
  // const [image2, setImage2] = useState(null);

  // const handleImage1Change = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImage1(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleImage2Change = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImage2(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const [formData, setFormData] = useState({
    name: "",
    descrip: "",
    state: "",
    highlight: [
      {
        established: "",
        full_form: "",
        also_known_as: "",
        nirf_ranking: "",
        entrance: "",
        highest_salary: "",
        average_package: "",
        recruiters: "",
        campus: "",
        website: "",
      },
    ],
    ranking: [
      {
        management_category: "",
        iirf: "",
        india_today: "",
        financial_times: "",
        outlook: "",
      },
    ],

    courses: [
      {
        name: "",
        duration: "",
        fees: "",
        eligibility: "",
        criteria: "",
      },
    ],

    admission: "",
    cutdescription: "",

    cutcategory: [{ general: "", ews: "", obs: "", sc: "", st: "", pwd: "" }],

    placement: [
      {
        total_offers: "",
        total_recruiters: "",
        number_offers: "",
        highest_offered: "",
        average_offered: "",
        recruiters: "",
      },
    ],

    facilities: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:6000/api/add",
        formData,
      );
      console.log("response",response)
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  // console.log(image1);
  // console.log(image2);

  const handleCourse = (index, field, value) => {
    const updatedExperiences = [...formData.courses];
    updatedExperiences[index][field] = value;
    setFormData({ ...formData, courses: updatedExperiences });
  };

  const handleHighlightChange = (index, field, value) => {
    const updatedHighlights = [...formData.highlight];
    updatedHighlights[index][field] = value;
    setFormData({ ...formData, highlight: updatedHighlights });
  };
  const handleRanking = (index, field, value) => {
    const updatedRankings = [...formData.ranking];
    updatedRankings[index][field] = value;
    setFormData({ ...formData, ranking: updatedRankings });
  };
  const handleCategory = (index, field, value) => {
    const updatedCategory = [...formData.cutcategory];
    updatedCategory[index][field] = value;
    setFormData({ ...formData, cutcategory: updatedCategory });
  };
  const handlePlacement = (index, field, value) => {
    const updatedPlacement = [...formData.placement];
    updatedPlacement[index][field] = value;
    setFormData({ ...formData, placement: updatedPlacement });
  };

  return (
    <div style={{ marginTop: "20vh" }}>
      <h1>Admin University</h1>
      <form
        
        onSubmit={handleSubmit}
      >
        {/* Input fields for University Description */}

        <h2>College Name</h2>
        <input
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />

        <h2>University Description</h2>
        <textarea
          style={{
            width: "85vw",
            height: "80vh",
            fontSize: "1.2rem",
            border: "1px solid #ccc", // Add a border for better visibility
            padding: "10px", // Add padding for spacing
            boxSizing: "border-box", // Ensure padding and border are included in the width
            verticalAlign: "top",
            overflowY: "auto", // Add a scrollbar if content exceeds the height
            whiteSpace: "pre-wrap", // Preserve line breaks
            wordWrap: "break-word", // Wrap long words
          }}
          name="descrip"
          placeholder="University Description"
          value={formData.descrip}
          onChange={handleChange}
        />

        <h2>State</h2>
        <input
          name="state"
          placeholder="state"
          value={formData.state}
          onChange={handleChange}
        />

        {/* highlight */}
        <Box mt={6}>
          <Heading as="h3" mb={4}>
            highlight
          </Heading>

          {formData.highlight.map((ele, index) => (
            <Box mb={4}>
              <FormControl>
                <FormLabel>established</FormLabel>
                <Input
                  value={ele.established}
                  onChange={(e) =>
                    handleHighlightChange(index, "established", e.target.value)
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>full_form</FormLabel>
                <Input
                  value={ele.full_form}
                  onChange={(e) =>
                    handleHighlightChange(index, "full_form", e.target.value)
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>also_known_as</FormLabel>
                <Input
                  value={ele.also_known_as}
                  onChange={(e) =>
                    handleHighlightChange(
                      index,
                      "also_known_as",
                      e.target.value
                    )
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>nirf_ranking</FormLabel>
                <Input
                  value={ele.nirf_ranking}
                  onChange={(e) =>
                    handleHighlightChange(index, "nirf_ranking", e.target.value)
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>entrance</FormLabel>
                <Input
                  value={ele.entrance}
                  onChange={(e) =>
                    handleHighlightChange(index, "entrance", e.target.value)
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>highest_salary</FormLabel>
                <Input
                  value={ele.highest_salary}
                  onChange={(e) =>
                    handleHighlightChange(
                      index,
                      "highest_salary",
                      e.target.value
                    )
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>average_package</FormLabel>
                <Input
                  value={ele.average_package}
                  onChange={(e) =>
                    handleHighlightChange(
                      index,
                      "average_package",
                      e.target.value
                    )
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>recruiters</FormLabel>
                <Input
                  value={ele.recruiters}
                  onChange={(e) =>
                    handleHighlightChange(index, "recruiters", e.target.value)
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>campus</FormLabel>
                <Input
                  value={ele.campus}
                  onChange={(e) =>
                    handleHighlightChange(index, "campus", e.target.value)
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>website</FormLabel>
                <Input
                  value={ele.website}
                  onChange={(e) =>
                    handleHighlightChange(index, "website", e.target.value)
                  }
                />
              </FormControl>
            </Box>
          ))}
        </Box>

        {/* ranking */}
        <Box mt={6}>
          <Heading as="h3" mb={4}>
            Ranking
          </Heading>

          {formData.ranking.map((ele, index) => (
            <Box key={index} mb={4}>
              <FormControl>
                <FormLabel>management_category</FormLabel>
                <Input
                  value={ele.management_category}
                  onChange={(e) =>
                    handleRanking(index, "management_category", e.target.value)
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>iirf</FormLabel>
                <Input
                  value={ele.iirf}
                  onChange={(e) => handleRanking(index, "iirf", e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>india_today</FormLabel>
                <Input
                  value={ele.india_today}
                  onChange={(e) =>
                    handleRanking(index, "india_today", e.target.value)
                  }
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>financial_times</FormLabel>
                <Input
                  value={ele.financial_times}
                  onChange={(e) =>
                    handleRanking(index, "financial_times", e.target.value)
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>outlook</FormLabel>
                <Input
                  value={ele.outlook}
                  onChange={(e) =>
                    handleRanking(index, "outlook", e.target.value)
                  }
                />
              </FormControl>
            </Box>
          ))}
        </Box>

        {/* courses */}
        <Box mt={6}>
          <Heading as="h3" mb={4}>
            Course
          </Heading>

          {formData.courses.map((ele, index) => (
            <Box key={index} mb={4}>
              <FormControl>
                <FormLabel>name</FormLabel>
                <Input
                  value={ele.name}
                  onChange={(e) => handleCourse(index, "name", e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>iirf</FormLabel>
                <Input
                  value={ele.iirf}
                  onChange={(e) => handleCourse(index, "iirf", e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>duration</FormLabel>
                <Input
                  value={ele.duration}
                  onChange={(e) =>
                    handleCourse(index, "duration", e.target.value)
                  }
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>fees</FormLabel>
                <Input
                  value={ele.fees}
                  onChange={(e) => handleCourse(index, "fees", e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>eligibility</FormLabel>
                <Input
                  value={ele.eligibility}
                  onChange={(e) =>
                    handleCourse(index, "eligibility", e.target.value)
                  }
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>criteria</FormLabel>
                <Input
                  value={ele.criteria}
                  onChange={(e) =>
                    handleCourse(index, "criteria", e.target.value)
                  }
                />
              </FormControl>
            </Box>
          ))}

          <Button
            mt={4}
            colorScheme="teal"
            onClick={() =>
              setFormData({
                ...formData,
                courses: [
                  ...formData.courses,
                  {
                    management_category: "",
                    iirf: "",
                    india_today: "",
                    financial_times: "",
                    outlook: "",
                  },
                ],
              })
            }
          >
            Add more Courses
          </Button>
        </Box>

        <h2>Admission</h2>
        <input
          name="admission"
          placeholder="admission description"
          value={formData.admission}
          onChange={handleChange}
        />

        <h2>Admission cutoff description</h2>
        <input
          name="cutdescription"
          placeholder="admission cutdescription"
          value={formData.cutdescription}
          onChange={handleChange}
        />

        {/* cutcategory */}
        <Box mt={6}>
          <Heading as="h3" mb={4}>
            Cut Category
          </Heading>

          {formData.cutcategory.map((ele, index) => (
            <Box key={index} mb={4}>
              <FormControl>
                <FormLabel>general</FormLabel>
                <Input
                  value={ele.general}
                  onChange={(e) =>
                    handleCategory(index, "general", e.target.value)
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>ews</FormLabel>
                <Input
                  value={ele.ews}
                  onChange={(e) => handleCategory(index, "ews", e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>obs</FormLabel>
                <Input
                  value={ele.obs}
                  onChange={(e) => handleCategory(index, "obs", e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>sc</FormLabel>
                <Input
                  value={ele.sc}
                  onChange={(e) => handleCategory(index, "sc", e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>st</FormLabel>
                <Input
                  value={ele.st}
                  onChange={(e) => handleCategory(index, "st", e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>pwd</FormLabel>
                <Input
                  value={ele.pwd}
                  onChange={(e) => handleCategory(index, "pwd", e.target.value)}
                />
              </FormControl>
            </Box>
          ))}
        </Box>

        {/* placement */}
        <Box mt={6}>
          <Heading as="h3" mb={4}>
            Placement
          </Heading>

          {formData.placement.map((ele, index) => (
            <Box key={index} mb={4}>
              <FormControl>
                <FormLabel>total_offers</FormLabel>
                <Input
                  value={ele.total_offers}
                  onChange={(e) =>
                    handlePlacement(index, "total_offers", e.target.value)
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>total_recruiters</FormLabel>
                <Input
                  value={ele.total_recruiters}
                  onChange={(e) =>
                    handlePlacement(index, "total_recruiters", e.target.value)
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>number_offers</FormLabel>
                <Input
                  value={ele.number_offers}
                  onChange={(e) =>
                    handlePlacement(index, "number_offers", e.target.value)
                  }
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>highest_offered</FormLabel>
                <Input
                  value={ele.highest_offered}
                  onChange={(e) =>
                    handlePlacement(index, "highest_offered", e.target.value)
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>average_offered</FormLabel>
                <Input
                  value={ele.average_offered}
                  onChange={(e) =>
                    handlePlacement(index, "average_offered", e.target.value)
                  }
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>recruiters</FormLabel>
                <Input
                  value={ele.recruiters}
                  onChange={(e) =>
                    handlePlacement(index, "recruiters", e.target.value)
                  }
                />
              </FormControl>
            </Box>
          ))}
        </Box>

        <h2>Facilities</h2>
        <input
          name="facilities"
          placeholder="admission facilities"
          value={formData.facilities}
          onChange={handleChange}
        />

        {/* Image 1 upload */}
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Upload Banner Image</h2>
          <input
            type="file"
            name="image1"
            accept="image/*"
            onChange={handleImage1Change}
            style={{
              marginBottom: "10px",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          />

          <h2>Upload Logo Image</h2>
          <input
            type="file"
            name="image2"
            accept="image/*"
            onChange={handleImage2Change}
            style={{ marginBottom: "10px", fontSize: "1.5rem" }}
          />
        </div> */}

        <Button
          style={{
            fontSize: "2.5rem",
            marginTop: "4vh",
            cursor: "pointer",
            border: "3px solid #014BEC",
            width: "65%",
            borderRadius: "20px",
          }}
          _hover={{ backgroundColor: "#014BEC" }}
          marginBottom={"3vh"}
          onClick={handleSubmit}
        >
          Add Data
        </Button>
      </form>
    </div>
  );
}

export default AddData;
