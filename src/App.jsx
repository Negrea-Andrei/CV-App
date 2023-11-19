import React, { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Description from "./components/Description/Description";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";
import ViewCV from "./components/ViewCV/ViewCV";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

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

  const [projects, setProjects] = useState([
    {
      key: uuid(),
      project: "",
      technologies: "",
      description: "",
    },
  ]);

  const addProjects = () => {
    const duplicateArray = [...projects];
    const newSegment = {
      key: uuid(),
      name: "",
      technologies: "",
      description: "",
    };
    duplicateArray.push(newSegment);
    setProjects(duplicateArray);
  };

  const [skills, setSkills] = useState([
    { name: "", key: uuid() },
    { name: "", key: uuid() },
    { name: "", key: uuid() },
    { name: "", key: uuid() },
    { name: "", key: uuid() },
    { name: "", key: uuid() },
    { name: "", key: uuid() },
    { name: "", key: uuid() },
  ]);

  const addSkills = () => {
    const dubSkills = [...skills];
    const newSkill = { name: "", key: uuid() };
    dubSkills.push(newSkill);
    setSkills(dubSkills);
  };

  const Print = () => {
    window.print();
  };

  return (
    <div className="container">
      <Header Print={Print} toggleState={toggleState} viewButton={viewButton} />
      {viewButton ? (
        <div className="contain">
          <Info setInfo={setInfo} info={info} />
          <Description
            description={description}
            setDescription={setDescription}
          />
          <Projects
            projects={projects}
            addProjects={addProjects}
            setProjects={setProjects}
          ></Projects>
          <Skills skills={skills} addSkills={addSkills} setSkills={setSkills} />
          <Work
            experience={experience}
            addExperienceSegment={addExperienceSegment}
            setExperience={setExperience}
          />
          <Education
            education={education}
            addEducationSegment={addEducationSegment}
            setEducation={setEducation}
          />
        </div>
      ) : (
        <div className="view-CV">
          <ViewCV
            info={info}
            description={description}
            education={education}
            experience={experience}
            skills={skills}
            projects={projects}
          />
        </div>
      )}
    </div>
  );
}

export default App;
