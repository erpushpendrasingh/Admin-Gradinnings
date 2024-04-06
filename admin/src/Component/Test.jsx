import React, { useState } from "react";
import axios from "axios";
const Test = () => {
  const initialState = {
    name: "",
    city: "",
    overview: "",
    Highlight: [{ overview: "", tables: [[]] }],
    Courses: [{ overview: "", tables: [[]] }],
    Admission: [{ overview: "", tables: [[]] }],
    Cutoff: [{ overview: "", tables: [[]] }],
    Placement: [{ overview: "", tables: [[]] }],
    Scholarship: [{ overview: "", tables: [[]] }],
    Campus: [{ overview: "", tables: [[]] }],
    Award: [{ overview: "", tables: [[]] }],
    Seat: [{ overview: "", tables: [[]] }],
    Eligibility: [{ overview: "", tables: [[]] }],
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      const fieldData = formData[parent][0]; // Assuming all fields are arrays with one object
      if (child === "overview") {
        setFormData({
          ...formData,
          [parent]: [{ ...fieldData, [child]: value }],
        });
      } else if (child === "tables") {
        const newTables = fieldData.tables.map((row, index) =>
          index.toString() === child.split(".")[1] ? value.split(",") : row
        );
        setFormData({
          ...formData,
          [parent]: [{ ...fieldData, [child]: newTables }],
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/test", formData);
      console.log(res.data);
      setFormData(initialState); // Reset form after successful submission
    } catch (error) {
      console.log(error);
    }
  };

  const handleHighlight = () => {
    const newFormData = { ...formData };
    if (!newFormData.Highlight) {
      newFormData.Highlight = [];
    }
    if (!newFormData.Highlight[0]) {
      newFormData.Highlight[0] = { tables: [[]] };
    }
    newFormData.Highlight[0].tables.push(["", ""]);
    setFormData(newFormData);
  };

    const handleCourses = () => {
      const newFormData = { ...formData };
      if (!newFormData.Courses) {
        newFormData.Courses = [];
      }
      if (!newFormData.Courses[0]) {
        newFormData.Courses[0] = { tables: [] };
      }
      newFormData.Courses[0].tables.push(["", ""]);
      setFormData(newFormData);
    };

    const handleAdmission = () => {
      const newFormData = { ...formData };
      if (!newFormData.Admission) {
        newFormData.Admission = [];
      }
      if (!newFormData.Admission[0]) {
        newFormData.Admission[0] = { tables: [] };
      }
      newFormData.Admission[0].tables.push(["", ""]);
      setFormData(newFormData);
    };

    const handleCutoff = () => {
      const newFormData = { ...formData };
      if (!newFormData.Cutoff) {
        newFormData.Cutoff = [];
      }
      if (!newFormData.Cutoff[0]) {
        newFormData.Cutoff[0] = { tables: [] };
      }
      newFormData.Cutoff[0].tables.push(["", ""]);
      setFormData(newFormData);
    };

    const handlePlacement = () => {
      const newFormData = { ...formData };
      if (!newFormData.Placement) {
        newFormData.Placement = [];
      }
      if (!newFormData.Placement[0]) {
        newFormData.Placement[0] = { tables: [] };
      }
      newFormData.Placement[0].tables.push(["", ""]);
      setFormData(newFormData);
    };

    const handleScholarship = () => {
      const newFormData = { ...formData };
      if (!newFormData.Scholarship) {
        newFormData.Scholarship = [];
      }
      if (!newFormData.Scholarship[0]) {
        newFormData.Scholarship[0] = { tables: [] };
      }
      newFormData.Scholarship[0].tables.push(["", ""]);
      setFormData(newFormData);
    };

    const handleCampus = () => {
      const newFormData = { ...formData };
      if (!newFormData.Campus) {
        newFormData.Campus = [];
      }
      if (!newFormData.Campus[0]) {
        newFormData.Campus[0] = { tables: [] };
      }
      newFormData.Campus[0].tables.push(["", ""]);
      setFormData(newFormData);
    };

    const handleAward = () => {
      const newFormData = { ...formData };
      if (!newFormData.Award) {
        newFormData.Award = [];
      }
      if (!newFormData.Award[0]) {
        newFormData.Award[0] = { tables: [] };
      }
      newFormData.Award[0].tables.push(["", ""]);
      setFormData(newFormData);
    };

    const handleSeat = () => {
      const newFormData = { ...formData };
      if (!newFormData.Seat) {
        newFormData.Seat = [];
      }
      if (!newFormData.Seat[0]) {
        newFormData.Seat[0] = { tables: [] };
      }
      newFormData.Seat[0].tables.push(["", ""]);
      setFormData(newFormData);
    };

    const handleEligibility = () => {
      const newFormData = { ...formData };
      if (!newFormData.Eligibility) {
        newFormData.Eligibility = [];
      }
      if (!newFormData.Eligibility[0]) {
        newFormData.Eligibility[0] = { tables: [] };
      }
      newFormData.Eligibility[0].tables.push(["", ""]);
      setFormData(newFormData);
    };

  return (
    <div>
    <h2>Add a New College</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
      />
      <label htmlFor="overview">Overview:</label>
      <input
        id="overview"
        name="overview"
        value={formData.overview}
        onChange={handleChange}
        required
      />
      <label htmlFor="highlight-overview">Highlight Overview:</label>
      <input
        id="highlight-overview"
        name="Highlight.overview"
        value={formData.Highlight[0]?.overview || ""}
        onChange={handleChange}
        required
      />
      {formData.Highlight &&
        formData.Highlight[0] &&
        formData.Highlight[0].tables &&
        formData.Highlight[0].tables.map((row, rowIndex) => (
          <div key={rowIndex}>
            <input
              type="text"
              placeholder="Column 1"
              value={row[0]}
              onChange={(e) => {
                const newFormData = { ...formData };
                newFormData.Highlight[0].tables[rowIndex][0] = e.target.value;
                setFormData(newFormData);
              }}
            />
            <input
              type="text"
              placeholder="Column 2"
              value={row[1]}
              onChange={(e) => {
                const newFormData = { ...formData };
                newFormData.Highlight[0].tables[rowIndex][1] = e.target.value;
                setFormData(newFormData);
              }}
            />
          </div>
        ))}
      <button type="button" onClick={handleHighlight}>
        Add Highlight
      </button>
        {/* Courses */}
        <label htmlFor="courses-overview">Courses Overview:</label>
        <input
          id="courses-overview"
          name="Courses.overview"
          value={formData.Courses[0]?.overview || ""}
          onChange={handleChange}
          required
        />
        {formData.Courses &&
          formData.Courses[0] &&
          formData.Courses[0].tables &&
          formData.Courses[0].tables.map((row, rowIndex) => (
            <div key={rowIndex}>
              <input
                type="text"
                placeholder="Column 1"
                value={row[0]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Courses[0].tables[rowIndex][0] = e.target.value;
                  setFormData(newFormData);
                }}
              />
              <input
                type="text"
                placeholder="Column 2"
                value={row[1]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Courses[0].tables[rowIndex][1] = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
          ))}
        {/* Add Table button */}
        <button type="button" onClick={handleCourses}>
          Add Courses
        </button>
        {/* Admission */}
        <label htmlFor="courses-overview">Admission Overview:</label>
        <input
          id="Admission-overview"
          name="Admission.overview"
          value={formData.Admission[0]?.overview || ""}
          onChange={handleChange}
          required
        />
        {formData.Admission &&
          formData.Admission[0] &&
          formData.Admission[0].tables &&
          formData.Admission[0].tables.map((row, rowIndex) => (
            <div key={rowIndex}>
              <input
                type="text"
                placeholder="Column 1"
                value={row[0]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Admission[0].tables[rowIndex][0] = e.target.value;
                  setFormData(newFormData);
                }}
              />
              <input
                type="text"
                placeholder="Column 2"
                value={row[1]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Admission[0].tables[rowIndex][1] = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
          ))}
        {/* Add Table button */}
        <button type="button" onClick={handleAdmission}>
          Add Admission
        </button>
        {/* Cutoff */}
        <label htmlFor="Cutoff-overview">Cutoff Overview:</label>
        <input
          id="Cutoff-overview"
          name="Cutoff.overview"
          value={formData.Cutoff[0]?.overview || ""}
          onChange={handleChange}
          required
        />
        {formData.Cutoff &&
          formData.Cutoff[0] &&
          formData.Cutoff[0].tables &&
          formData.Cutoff[0].tables.map((row, rowIndex) => (
            <div key={rowIndex}>
              <input
                type="text"
                placeholder="Column 1"
                value={row[0]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Cutoff[0].tables[rowIndex][0] = e.target.value;
                  setFormData(newFormData);
                }}
              />
              <input
                type="text"
                placeholder="Column 2"
                value={row[1]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Cutoff[0].tables[rowIndex][1] = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
          ))}
        {/* Add Table button */}
        <button type="button" onClick={handleCutoff}>
          Add Cutoff
        </button>
        {/* Placement */}
        <label htmlFor="Placement-overview">Placement Overview:</label>
        <input
          id="Placement-overview"
          name="Placement.overview"
          value={formData.Placement[0]?.overview || ""}
          onChange={handleChange}
          required
        />
        {formData.Placement &&
          formData.Placement[0] &&
          formData.Placement[0].tables &&
          formData.Placement[0].tables.map((row, rowIndex) => (
            <div key={rowIndex}>
              <input
                type="text"
                placeholder="Column 1"
                value={row[0]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Placement[0].tables[rowIndex][0] = e.target.value;
                  setFormData(newFormData);
                }}
              />
              <input
                type="text"
                placeholder="Column 2"
                value={row[1]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Placement[0].tables[rowIndex][1] = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
          ))}
        {/* Add Table button */}
        <button type="button" onClick={handlePlacement}>
          Add Placement
        </button>
        {/* Scholarship */}
        <label htmlFor="Scholarship-overview">Scholarship Overview:</label>
        <input
          id="Scholarship-overview"
          name="Scholarship.overview"
          value={formData.Scholarship[0]?.overview || ""}
          onChange={handleChange}
          required
        />
        {formData.Scholarship &&
          formData.Scholarship[0] &&
          formData.Scholarship[0].tables &&
          formData.Scholarship[0].tables.map((row, rowIndex) => (
            <div key={rowIndex}>
              <input
                type="text"
                placeholder="Column 1"
                value={row[0]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Scholarship[0].tables[rowIndex][0] =
                    e.target.value;
                  setFormData(newFormData);
                }}
              />
              <input
                type="text"
                placeholder="Column 2"
                value={row[1]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Scholarship[0].tables[rowIndex][1] =
                    e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
          ))}
        {/* Add Table button */}
        <button type="button" onClick={handleScholarship}>
          Add Scholarship
        </button>
        {/* Campus */}
        <label htmlFor="Campus-overview">Campus Overview:</label>
        <input
          id="Campus-overview"
          name="Campus.overview"
          value={formData.Campus[0]?.overview || ""}
          onChange={handleChange}
          required
        />
        {formData.Campus &&
          formData.Campus[0] &&
          formData.Campus[0].tables &&
          formData.Campus[0].tables.map((row, rowIndex) => (
            <div key={rowIndex}>
              <input
                type="text"
                placeholder="Column 1"
                value={row[0]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Campus[0].tables[rowIndex][0] = e.target.value;
                  setFormData(newFormData);
                }}
              />
              <input
                type="text"
                placeholder="Column 2"
                value={row[1]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Campus[0].tables[rowIndex][1] = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
          ))}
        {/* Add Table button */}
        <button type="button" onClick={handleCampus}>
          Add Campus
        </button>
        {/* Award */}
        <label htmlFor="Award-overview">Award Overview:</label>
        <input
          id="Award-overview"
          name="Award.overview"
          value={formData.Award[0]?.overview || ""}
          onChange={handleChange}
          required
        />
        {formData.Award &&
          formData.Award[0] &&
          formData.Award[0].tables &&
          formData.Award[0].tables.map((row, rowIndex) => (
            <div key={rowIndex}>
              <input
                type="text"
                placeholder="Column 1"
                value={row[0]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Award[0].tables[rowIndex][0] = e.target.value;
                  setFormData(newFormData);
                }}
              />
              <input
                type="text"
                placeholder="Column 2"
                value={row[1]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Award[0].tables[rowIndex][1] = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
          ))}
        {/* Add Table button */}
        <button type="button" onClick={handleAward}>
          Add Award
        </button>
        {/* Seat */}
        <label htmlFor="Seat-overview">Seat Overview:</label>
        <input
          id="Seat-overview"
          name="Seat.overview"
          value={formData.Seat[0]?.overview || ""}
          onChange={handleChange}
          required
        />
        {formData.Seat &&
          formData.Seat[0] &&
          formData.Seat[0].tables &&
          formData.Seat[0].tables.map((row, rowIndex) => (
            <div key={rowIndex}>
              <input
                type="text"
                placeholder="Column 1"
                value={row[0]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Seat[0].tables[rowIndex][0] = e.target.value;
                  setFormData(newFormData);
                }}
              />
              <input
                type="text"
                placeholder="Column 2"
                value={row[1]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Seat[0].tables[rowIndex][1] = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
          ))}
        {/* Add Table button */}
        <button type="button" onClick={handleSeat}>
          Add Seat
        </button>
        {/* Eligibility */}
        <label htmlFor="Eligibility-overview">Eligibility Overview:</label>
        <input
          id="Eligibility-overview"
          name="Eligibility.overview"
          value={formData.Eligibility[0]?.overview || ""}
          onChange={handleChange}
          required
        />
        {formData.Eligibility &&
          formData.Eligibility[0] &&
          formData.Eligibility[0].tables &&
          formData.Eligibility[0].tables.map((row, rowIndex) => (
            <div key={rowIndex}>
              <input
                type="text"
                placeholder="Column 1"
                value={row[0]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Eligibility[0].tables[rowIndex][0] =
                    e.target.value;
                  setFormData(newFormData);
                }}
              />
              <input
                type="text"
                placeholder="Column 2"
                value={row[1]}
                onChange={(e) => {
                  const newFormData = { ...formData };
                  newFormData.Eligibility[0].tables[rowIndex][1] =
                    e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
          ))}
        {/* Add Table button */}
        <button type="button" onClick={handleEligibility}>
          Add Eligibility
        </button>
        {/* Repeat similar input fields for other properties */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Test;
