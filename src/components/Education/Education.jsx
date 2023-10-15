import React from "react";
import { useState } from "react";
import "./Education.css";

export default function Education({ education, addEducationSegment, setEducation}) {
  const handleAddEducation = (e) => {
    e.preventDefault();
    addEducationSegment();
  };

  const handleRemoveSegment = () => {
    let dupEducation = [...education];
    dupEducation.pop();
    setEducation(dupEducation);
  };

  return (
    <section className="section">
      <h2 className="title">Education</h2>
      <button onClick={(e) => handleAddEducation(e)}>
        <span className="add-segment">
          <i className="fa-solid fa-plus fa-2xl"></i>
        </span>
      </button>
      {education.map((education) => (
        <>
          <div className="grid">
            <input
              placeholder="School / University"
              type="text"
              id="school"
              name="school"
            />
            <input placeholder="Degree" type="text" id="degree" name="degree" />
            <input
              placeholder="Start"
              id="start-school"
              type="text"
              name="start_school"
            />
            <input
              placeholder="Finish"
              type="text"
              id="finish_school"
              name="finish_school"
            />
          </div>
          <textarea
            name="description"
            className="text-area"
            placeholder="Enter what did you learned during your time in college......"
          ></textarea>
          <button className="input-button" onClick={handleRemoveSegment}>
            Delete <i className="fas fa-trash-alt"></i>
          </button>
          <div className="divider"></div>
        </>
      ))}
      {education.length === 0 && (
        <span className="warning">Please add an education field</span>
      )}
    </section>
  );
}

