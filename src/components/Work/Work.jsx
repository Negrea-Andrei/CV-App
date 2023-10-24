import "./Work.css";
import { useState } from "react";
import React from "react";

export default function Work({
  experience,
  addExperienceSegment,
  setExperience,
}) {
  const handleAddExperience = (e) => {
    e.preventDefault();
    addExperienceSegment();
  };

  const handleRemoveSegment = (key) => {
    const index = experience.findIndex((item) => item.key === key);
    if (index !== -1) {
      let dupExperience = [...experience];
      dupExperience.splice(index, 1);
      setExperience(dupExperience);
    }
  };

  const handleSetInfo = (e, index) => {
    const val = e.target.value;
    const key = e.target.name;

    let dupExperience = [...experience];
    dupExperience[index][key] = val;
    setExperience(dupExperience);    
  };

  return (
    <section className="section">
      <h2 className="title">Work</h2>
      <button className="add-segment" onClick={(e) => handleAddExperience(e)}>
        <span>
          <i className="fa-solid fa-plus fa-2xl"></i>
        </span>
      </button>
      {experience.map((experienceField, index) => (
        <div key={experienceField.key} data-index={index}>
          <div className="grid">
            <input
              name="company"
              id="company"
              type="text"
              placeholder="Company Name"
              value={experienceField.company}
              onChange={(e) => handleSetInfo(e, index)}
            />
            <input
              name="role"
              id="role"
              className="input-full-width"
              type="text"
              placeholder="Role"
              value={experienceField.role}
              onChange={(e) => handleSetInfo(e, index)}
            />
            <input
              name="start"
              id="start"
              type="text"
              placeholder="From"
              value={experienceField.start}
              onChange={(e) => handleSetInfo(e, index)}
            />
            <input
              name="finish"
              id="finish"
              type="text"
              placeholder="To"
              value={experienceField.finish}
              onChange={(e) => handleSetInfo(e, index)}
            />
          </div>
          <textarea
            name="description"
            id="description"
            value={experienceField.description}
              onChange={(e) => handleSetInfo(e, index)}
            className="text-area"
            placeholder="List Job description, responsibilities, achievements here....."
          ></textarea>
          <button className="input-button" onClick={() => handleRemoveSegment(experienceField.key)}>
            Delete <i className="fas fa-trash-alt"></i>
          </button>
          <div className="divider"></div>
        </div>
      ))}
      {experience.length === 0 && (
        <span className="warning">Please add an experience field</span>
      )}
    </section>
  );
}
