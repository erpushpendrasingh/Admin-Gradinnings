import React, { useState } from "react";
import { Box, Text, Textarea, Input } from "@chakra-ui/react";
import axios from "axios";

function DataForm() {
 const [placement, setPlacement] = useState({
  overview: "",
  tables: [{ table1: [] }, { table2: [] }],
 });
 const [campusAndInfrastructure, setCampusAndInfrastructure] = useState({
  overview: "",
  tables: [{ facilities: [] }, { services: [] }],
 });
 const [cutOff, setCutOff] = useState({
  overview: "",
  tables: [{ category1: [] }, { category2: [] }],
 });
 const [coursesarray, setCoursesArray] = useState([]);
 const [city, setCity] = useState("");
 const [state, setState] = useState("");
 const [fee, setFee] = useState("");
 const [banner, setBanner] = useState("");
 const [logo, setLogo] = useState("");
 const [url, setUrl] = useState("");

 const handleBannerImg = (event) => {
  const file = event.target.files[0];
  if (file) {
   const reader = new FileReader();
   reader.onloadend = () => {
    setBanner(reader.result);
   };
   reader.readAsDataURL(file);
  }
 };

 const handleLogoImg = (event) => {
  const file = event.target.files[0];
  if (file) {
   const reader = new FileReader();
   reader.onloadend = () => {
    setLogo(reader.result);
   };
   reader.readAsDataURL(file);
  }
 };

 const handleSubmit = async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const formData = {
   placement: placement,
   campusAndInfrastructure: campusAndInfrastructure,
   cutOff: cutOff,
   coursesarray: coursesarray,
   city: city,
   state: state,
   fee: fee,
   Banner: banner,
   Logo: logo,
   url: url,
  };
  console.log("formData:", formData);
  try {
   const response = await axios.post(
    "http://localhost:5000/api/add",
    formData,
    {
     headers: {
      "Content-Type": "multipart/form-data",
     },
    }
   );
   console.log(response.data);
  } catch (error) {
   console.error("Error:", error);
  }
 };

 return (
  <Box border={"1px solid red"}>
   <Text>Data Collection Form</Text>
   <form onSubmit={handleSubmit}>
    {/* Placement Section */}
    <h2>Placement</h2>
    <label htmlFor="placementOverview">Overview:</label>
    <Textarea
     id="placementOverview"
     value={placement.overview}
     onChange={(e) => setPlacement({ ...placement, overview: e.target.value })}
     rows="4"
     cols="50"
    ></Textarea>

    {/* Placement Tables */}
    <label htmlFor="placementTable1">Table 1:</label>
    <Textarea
     id="placementTable1"
     value={placement.tables[0].table1.join("\n")}
     onChange={(e) =>
      setPlacement({
       ...placement,
       tables: [
        { table1: e.target.value.split("\n") },
        ...placement.tables.slice(1),
       ],
      })
     }
     rows="4"
     cols="50"
    ></Textarea>
    <label htmlFor="placementTable2">Table 2:</label>
    <Textarea
     id="placementTable2"
     value={placement.tables[1].table2.join("\n")}
     onChange={(e) =>
      setPlacement({
       ...placement,
       tables: [placement.tables[0], { table2: e.target.value.split("\n") }],
      })
     }
     rows="4"
     cols="50"
    ></Textarea>

    {/* Campus and Infrastructure Section */}
    <h2>Campus and Infrastructure</h2>
    <label htmlFor="campusOverview">Overview:</label>
    <Textarea
     id="campusOverview"
     value={campusAndInfrastructure.overview}
     onChange={(e) =>
      setCampusAndInfrastructure({
       ...campusAndInfrastructure,
       overview: e.target.value,
      })
     }
     rows="4"
     cols="50"
    ></Textarea>

    {/* Campus and Infrastructure Tables */}
    <label htmlFor="facilitiesTable">Facilities:</label>
    <Textarea
     id="facilitiesTable"
     value={campusAndInfrastructure.tables[0].facilities.join("\n")}
     onChange={(e) =>
      setCampusAndInfrastructure({
       ...campusAndInfrastructure,
       tables: [
        { facilities: e.target.value.split("\n") },
        ...campusAndInfrastructure.tables.slice(1),
       ],
      })
     }
     rows="4"
     cols="50"
    ></Textarea>
    <label htmlFor="servicesTable">Services:</label>
    <Textarea
     id="servicesTable"
     value={campusAndInfrastructure.tables[1].services.join("\n")}
     onChange={(e) =>
      setCampusAndInfrastructure({
       ...campusAndInfrastructure,
       tables: [
        campusAndInfrastructure.tables[0],
        { services: e.target.value.split("\n") },
       ],
      })
     }
     rows="4"
     cols="50"
    ></Textarea>

    {/* Cut Off Section */}
    <h2>Cut Off</h2>
    <label htmlFor="cutOffOverview">Overview:</label>
    <Textarea
     id="cutOffOverview"
     value={cutOff.overview}
     onChange={(e) => setCutOff({ ...cutOff, overview: e.target.value })}
     rows="4"
     cols="50"
    ></Textarea>

    {/* Cut Off Tables */}
    <label htmlFor="category1Table">Category 1:</label>
    <Textarea
     id="category1Table"
     value={cutOff.tables[0].category1.join("\n")}
     onChange={(e) =>
      setCutOff({
       ...cutOff,
       tables: [
        { category1: e.target.value.split("\n") },
        ...cutOff.tables.slice(1),
       ],
      })
     }
     rows="4"
     cols="50"
    ></Textarea>
    <label htmlFor="category2Table">Category 2:</label>
    <Textarea
     id="category2Table"
     value={cutOff.tables[1].category2.join("\n")}
     onChange={(e) =>
      setCutOff({
       ...cutOff,
       tables: [cutOff.tables[0], { category2: e.target.value.split("\n") }],
      })
     }
     rows="4"
     cols="50"
    ></Textarea>

    {/* Other Information */}
    <h2>Other Information</h2>
    <label htmlFor="coursesarray">Courses Array:</label>
    <Input
     id="coursesarray"
     type="text"
     value={coursesarray}
     onChange={(e) => setCoursesArray(e.target.value.split(","))}
    />
    <label htmlFor="city">City:</label>
    <Input
     id="city"
     type="text"
     value={city}
     onChange={(e) => setCity(e.target.value)}
    />
    <label htmlFor="state">State:</label>
    <Input
     id="state"
     type="text"
     value={state}
     onChange={(e) => setState(e.target.value)}
    />
    <label htmlFor="fee">Fee:</label>
    <Input
     id="fee"
     type="text"
     value={fee}
     onChange={(e) => setFee(e.target.value)}
    />

    {/* Banner Image Upload */}
    <h2>Upload Banner Image</h2>
    <Input
     type="file"
     name="banner"
     accept="image/*"
     onChange={handleBannerImg}
     style={{
      marginBottom: "10px",
      fontSize: "1.5rem",
      textAlign: "center",
     }}
    />

    {/* Logo Image Upload */}
    <h2>Upload Logo Image</h2>
    <Input
     type="file"
     name="logo"
     accept="image/*"
     onChange={handleLogoImg}
     style={{
      marginBottom: "10px",
      fontSize: "1.5rem",
      textAlign: "center",
     }}
    />

    {/* URL Input */}
    <label htmlFor="url">URL:</label>
    <Input
     id="url"
     type="text"
     value={url}
     onChange={(e) => setUrl(e.target.value)}
    />

    {/* Submit button */}
    <button type="submit">Submit</button>
   </form>
  </Box>
 );
}

export default DataForm;

// import React, { useState } from "react";
// import { Box, Text, Textarea, Input } from "@chakra-ui/react";
// import { Axios } from "axios";
// function DataForm() {
//  const [placement, setPlacement] = useState({
//   overview: "",
//   tables: [{ table1: [] }, { table2: [] }],
//  });
//  const [campusAndInfrastructure, setCampusAndInfrastructure] = useState({
//   overview: "",
//   tables: [{ facilities: [] }, { services: [] }],
//  });
//  const [cutOff, setCutOff] = useState({
//   overview: "",
//   tables: [{ category1: [] }, { category2: [] }],
//  });
//  const [coursesArray, setCoursesArray] = useState([]);
//  const [city, setCity] = useState("");
//  const [state, setState] = useState("");
//  const [fee, setFee] = useState("");
//  const [banner, setBanner] = useState("");
//  const [logo, setLogo] = useState("");
//  const [url, setUrl] = useState("");
//  const handleBannerImg = (event) => {
//   const file = event.target.files[0];
//   if (file) {
//    const reader = new FileReader();
//    reader.onloadend = () => {
//     setBanner(reader.result);
//    };
//    reader.readAsDataURL(file);
//   }
//  };
//  const handleLogoImg = (event) => {
//   const file = event.target.files[0];
//   if (file) {
//    const reader = new FileReader();
//    reader.onloadend = () => {
//     setLogo(reader.result);
//    };
//    reader.readAsDataURL(file);
//   }
//  };
//  const handleSubmit = async () => {
//   const formData = {
//    placement: placement,
//    campusAndInfrastructure: campusAndInfrastructure,
//    cutOff: cutOff,
//    coursesArray: coursesArray,
//    city: city,
//    state: state,
//    fee: fee,
//    Banner: banner,
//    Logo: logo,
//    url: url,
//   };
//   try {
//    const response = await Axios.post(
//     // Correct axios usage
//     "http://localhost:5000/api/add",
//     formData,
//     {
//      headers: {
//       "Content-Type": "multipart/form-data",
//      },
//     }
//    );
//    console.log(response.data);
//   } catch (error) {
//    console.error("Error:", error);
//   }
//   console.log(formData);
//   // You can perform further actions here, like sending formData to your backend
//  };

//  return (
//   <Box border={"1px solid red"}>
//    <Text>Data Collection Form</Text>
//    <Box>
//     {/* Placement Section */}
//     <h2>Placement</h2>
//     <label htmlFor="placementOverview">Overview:</label>

//     <Textarea
//      id="placementOverview"
//      value={placement.overview}
//      onChange={(e) => setPlacement({ ...placement, overview: e.target.value })}
//      rows="4"
//      cols="50"
//     ></Textarea>

//     {/* Tables */}
//     <label htmlFor="placementTable1">Table 1:</label>

//     <Textarea
//      id="placementTable1"
//      value={placement.tables[0].table1.join("\n")}
//      onChange={(e) =>
//       setPlacement({
//        ...placement,
//        tables: [
//         { table1: e.target.value.split("\n") },
//         ...placement.tables.slice(1),
//        ],
//       })
//      }
//      rows="4"
//      cols="50"
//     ></Textarea>

//     <label htmlFor="placementTable2">Table 2:</label>

//     <Textarea
//      id="placementTable2"
//      value={placement.tables[1].table2.join("\n")}
//      onChange={(e) =>
//       setPlacement({
//        ...placement,
//        tables: [placement.tables[0], { table2: e.target.value.split("\n") }],
//       })
//      }
//      rows="4"
//      cols="50"
//     ></Textarea>

//     {/* Campus and Infrastructure Section */}
//     <h2>Campus and Infrastructure</h2>
//     <label htmlFor="campusOverview">Overview:</label>

//     <Textarea
//      id="campusOverview"
//      value={campusAndInfrastructure.overview}
//      onChange={(e) =>
//       setCampusAndInfrastructure({
//        ...campusAndInfrastructure,
//        overview: e.target.value,
//       })
//      }
//      rows="4"
//      cols="50"
//     ></Textarea>

//     {/* Tables */}
//     <label htmlFor="facilitiesTable">Facilities:</label>

//     <Textarea
//      id="facilitiesTable"
//      value={campusAndInfrastructure.tables[0].facilities.join("\n")}
//      onChange={(e) =>
//       setCampusAndInfrastructure({
//        ...campusAndInfrastructure,
//        tables: [
//         { facilities: e.target.value.split("\n") },
//         ...campusAndInfrastructure.tables.slice(1),
//        ],
//       })
//      }
//      rows="4"
//      cols="50"
//     ></Textarea>

//     <label htmlFor="servicesTable">Services:</label>

//     <Textarea
//      id="servicesTable"
//      value={campusAndInfrastructure.tables[1].services.join("\n")}
//      onChange={(e) =>
//       setCampusAndInfrastructure({
//        ...campusAndInfrastructure,
//        tables: [
//         campusAndInfrastructure.tables[0],
//         { services: e.target.value.split("\n") },
//        ],
//       })
//      }
//      rows="4"
//      cols="50"
//     ></Textarea>

//     {/* Cut Off Section */}
//     <h2>Cut Off</h2>
//     <label htmlFor="cutOffOverview">Overview:</label>

//     <Textarea
//      id="cutOffOverview"
//      value={cutOff.overview}
//      onChange={(e) => setCutOff({ ...cutOff, overview: e.target.value })}
//      rows="4"
//      cols="50"
//     ></Textarea>

//     {/* Tables */}
//     <label htmlFor="category1Table">Category 1:</label>

//     <Textarea
//      id="category1Table"
//      value={cutOff.tables[0].category1.join("\n")}
//      onChange={(e) =>
//       setCutOff({
//        ...cutOff,
//        tables: [
//         { category1: e.target.value.split("\n") },
//         ...cutOff.tables.slice(1),
//        ],
//       })
//      }
//      rows="4"
//      cols="50"
//     ></Textarea>

//     <label htmlFor="category2Table">Category 2:</label>

//     <Textarea
//      id="category2Table"
//      value={cutOff.tables[1].category2.join("\n")}
//      onChange={(e) =>
//       setCutOff({
//        ...cutOff,
//        tables: [cutOff.tables[0], { category2: e.target.value.split("\n") }],
//       })
//      }
//      rows="4"
//      cols="50"
//     ></Textarea>

//     {/* Other Information */}
//     <h2>Other Information</h2>
//     <label htmlFor="coursesArray">Courses Array:</label>

//     <Input
//      id="coursesArray"
//      type="text"
//      value={coursesArray}
//      onChange={(e) => setCoursesArray(e.target.value.split(","))}
//     />

//     <label htmlFor="city">City:</label>

//     <Input
//      id="city"
//      type="text"
//      value={city}
//      onChange={(e) => setCity(e.target.value)}
//     />

//     <label htmlFor="state">State:</label>

//     <Input
//      id="state"
//      type="text"
//      value={state}
//      onChange={(e) => setState(e.target.value)}
//     />

//     <label htmlFor="fee">Fee:</label>

//     <Input
//      id="fee"
//      type="text"
//      value={fee}
//      onChange={(e) => setFee(e.target.value)}
//     />

//     <label htmlFor="banner">Banner:</label>

//     {/* <Input
//      id="banner"
//      type="text"
//      value={banner}
//      onChange={(e) => setBanner(e.target.value)}
//     /> */}
//     <h2>Upload Banner Image</h2>
//     <Input
//      type="file"
//      name="banner"
//      accept="image/*"
//      onChange={handleBannerImg}
//      style={{
//       marginBottom: "10px",
//       fontSize: "1.5rem",
//       textAlign: "center",
//      }}
//     />
//     <h2>Upload Logo Image</h2>
//     <Input
//      type="file"
//      name="logo"
//      accept="image/*"
//      onChange={handleLogoImg}
//      style={{
//       marginBottom: "10px",
//       fontSize: "1.5rem",
//       textAlign: "center",
//      }}
//     />

//     {/* <label htmlFor="logo">Logo:</label>

//     <Input
//      id="logo"
//      type="text"
//      value={logo}
//      onChange={(e) => setLogo(e.target.value)}
//     /> */}

//     <label htmlFor="url">URL:</label>

//     <Input
//      id="url"
//      type="text"
//      value={url}
//      onChange={(e) => setUrl(e.target.value)}
//     />

//     <button onClick={handleSubmit}>Submit</button>
//    </Box>
//   </Box>
//  );
// }

// export default DataForm;
