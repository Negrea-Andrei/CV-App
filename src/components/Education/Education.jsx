import React from "react";
import "./Education.css";

function Education({ education }) {
  return (
    <section className="section">
      <h2 className="title">Education</h2>
      <span className="add-segment">
        <i className="fa-solid fa-plus fa-2xl"></i>
      </span>
      {education.length !== 0 ? (
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
          <button className="input-button">
            Delete <i className="fas fa-trash-alt"></i>
          </button>
        </>
      ) : (
        "Salut"
      )}
    </section>
  );
}

export default Education;
