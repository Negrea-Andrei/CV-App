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

  const handleRemoveSegment = () => {
    let dupExperience = [...experience];
    dupExperience.pop();
    setExperience(dupExperience);
  };
  return (
    <section className="section">
      <h2 className="title">Work</h2>
      <button onClick={(e) => handleAddExperience(e)}>
        <span className="add-segment">
          <i className="fa-solid fa-plus fa-2xl"></i>
        </span>
      </button>
      {experience.map((experience) => (
        <>
          <div className="grid">
            <input
              name="company"
              type="text"
              placeholder="Company Name"
            />
            <input
              name="role"
              className="input-full-width"
              type="text"
              placeholder="Role"
            />
            <input name="start" type="text" placeholder="From" />
            <input name="finish" type="text" placeholder="To" />
          </div>
          <textarea
            name="description"
            className="text-area"
            placeholder="List Job description, responsibilities, achievements here....."
          ></textarea>
          <button className="input-button" onClick={handleRemoveSegment}>
            Delete <i className="fas fa-trash-alt"></i>
          </button>
          <div className="divider"></div>
        </>
      ))}
      {experience.length === 0 && (
        <span className="warning">Please add an experience field</span>
      )}
    </section>
  );
}
