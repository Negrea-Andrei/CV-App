import React, { useState } from "react";
import "./Education.css";

export default function Education({
  education,
  addEducationSegment,
  setEducation,
}) {
  const handleAddEducation = (e) => {
    e.preventDefault();
    addEducationSegment();
  };

  const handleRemoveSegment = (key) => {
    const index = education.findIndex((item) => item.key === key);
    if (index !== -1) {
      let dupEducation = [...education];
      dupEducation.splice(index, 1);
      setEducation(dupEducation);
    }
  };

  const handleSetInfo = (e, index) => {
    const val = e.target.value;
    const key = e.target.name;

    let dupEducation = [...education];
    dupEducation[index][key] = val;
    setEducation(dupEducation);
  };

  return (
    <section className="section">
      <h2 className="title">Education</h2>
      <button className="add-segment" onClick={(e) => handleAddEducation(e)}>
        <span>
          <i className="fa-solid fa-plus fa-2xl"></i>
        </span>
      </button>
      {education.map((educationField, index) => (
        <div key={educationField.key} data-index={index}>
          <div className="grid">
            <input
              placeholder="School / University"
              type="text"
              id="school"
              name="school"
              value={educationField.school}
              onChange={(e) => handleSetInfo(e, index)}
            />
            <input
              placeholder="Degree"
              type="text"
              id="degree"
              name="degree"
              value={educationField.degree}
              onChange={(e) => handleSetInfo(e, index)}
            />
            <input
              placeholder="Start"
              id="start_school"
              type="text"
              name="start_school"
              value={educationField.start_school}
              onChange={(e) => handleSetInfo(e, index)}
            />
            <input
              placeholder="Finish"
              type="text"
              id="finish_school"
              name="finish_school"
              value={educationField.finish_school}
              onChange={(e) => handleSetInfo(e, index)}
            />
          </div>
          <textarea
            name="describe"
            className="text-area"
            onChange={(e) => handleSetInfo(e, index)}
            value={educationField.describe}
            placeholder="Enter what you learned during your time in college......"
          ></textarea>
          <button className="input-button" onClick={() => handleRemoveSegment(educationField.key)}>
            Delete <i className="fas fa-trash-alt"></i>
          </button>
          <div className="divider"></div>
        </div>
      ))}
      {education.length === 0 && (
        <span className="warning">Please add an education field</span>
      )}
    </section>
  );
}
