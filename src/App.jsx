import React, { useState } from "react";
import uuid from 'react-uuid';
import "./App.css";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Description from "./components/Description/Description";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";
import ViewCV from "./components/ViewCV/ViewCV";

function App() {
  const [viewButton, setViewButton] = useState(true);

  const toggleState = () => {
    setViewButton(!viewButton);
  };

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [description, setDescription] = useState("");

  const [education, setEducation] = useState([
    {
      key: uuid(),
      school: "",
      degree: "",
      start_school: "",
      finish_school: "",
      describe: "",
    },
  ]);

  const addEducationSegment = () => {
    const duplicateArray = [...education];
    const newSegment = {
      key: uuid(),
      school: "",
      degree: "",
      start_school: "",
      finish_school: "",
      describe: "",
    };
    duplicateArray.push(newSegment);
    setEducation(duplicateArray);
  };

  const [experience, setExperience] = useState([
    {
      key: uuid(),
      company: "",
      role: "",
      start: "",
      finish: "",
      description: "",
    },
  ]);

  const addExperienceSegment = () => {
    const duplicateArray = [...experience];
    const newSegment = {
      key: uuid(),
      company: "",
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
          <Info setInfo={setInfo} info={info} />
          <Description
            description={description}
            setDescription={setDescription}
          />
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
        <div className="view-CV">
          <ViewCV info={info}
          description={description}
          education={education}
          experience={experience} />
        </div>
      )}
    </div>
  );
}

export default App;
