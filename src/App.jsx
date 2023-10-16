import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Description from "./components/Description/Description";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";

function App() {
  const [viewButton, setViewButton] = useState(true);

  const toggleState = () => {
    setViewButton(!viewButton);
  };

  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      start_school: "",
      finish_school: "",
    },
  ]);

  const addEducationSegment = () => {
    const duplicateArray = [...education];
    const newSegment = {
      school: "",
      location: "",
      from: "",
      to: "",
      qualification: "",
      achievements: "",
    };
    duplicateArray.push(newSegment);
    setEducation(duplicateArray);
  };

  const [experience, setExperience] = useState([
    {
      company: "",
      location: "",
      start: "",
      finish: "",
      role: "",
      description: "",
    },
  ]);

  const addExperienceSegment = () => {
    const duplicateArray = [...experience];
    const newSegment = {
      company: "",
      location: "",
      start: "",
      finish: "",
      role: "",
      description: "",
    };
    duplicateArray.push(newSegment);
    setExperience(duplicateArray);
  };

  return (
    <div className="container">
      <Header toggleState={toggleState} viewButton={viewButton} />
      {viewButton ? (
        <div className="contain">
          <Info />
          <Description />
          <Education
            education={education}
            addEducationSegment={addEducationSegment}
            setEducation={setEducation}
          />
          <Work
            experience={experience}
            addExperienceSegment={addExperienceSegment}
            setExperience={setExperience}
          />
        </div>
      ) : (
        <div>NOT YET</div>
      )}
    </div>
  );
}

export default App;
