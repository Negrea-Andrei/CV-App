import "./Skills.css";
import React, { useState } from "react";

export default function Skills({ skills, addSkills, setSkills }) {
  const handleAddSkill = (e) => {
    e.preventDefault();
    addSkills();
  };

  const handleRemoveSkill = (e) => {
    e.preventDefault();
    const newSkills = [...skills];
    newSkills.pop();
    setSkills(newSkills);
  };

  const handleSetSkill = (e, index) => {
    const val = e.target.value;

    let dupSkills = [...skills];
    dupSkills[index].name = val;
    setSkills(dupSkills);
  };
  return (
    <section className="section">
      <h2 className="title">Skills</h2>
      <button className="add-segment" onClick={(e) => handleAddSkill(e)}>
        <span>
          <i className="fa-solid fa-plus fa-2xl"></i>
        </span>
      </button>
      <button className="remove-skill" onClick={(e) => handleRemoveSkill(e)}>
        <span>
          <i className="fa-solid fa-minus fa-2xl"></i>
        </span>
      </button>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <input
            key={skill.key}
            placeholder="Skill"
            type="text"
            maxLength="20"
            name="skill"
            value={skill.name}
            onChange={(e) => handleSetSkill(e, index)}
          />
        ))}
      </div>
    </section>
  );
}
