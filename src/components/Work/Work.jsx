import "./Work.css";
import React from "react";

export default function Work(experience) {
  return (
    <section className="section">
      <h2 className="title">Work</h2>
      <span className="add-segment">
        <i className="fa-solid fa-plus fa-2xl"></i>
      </span>
      {experience.length !== 0 ? (
        <>
          <div className="grid">
            <input name="company" type="text" placeholder="Company Name" />
            <input
              name="role"
              className="input-full-width"
              type="text"
              placeholder="Role"
            />
            <input name="from" type="text" placeholder="From" />
            <input name="to" type="text" placeholder="To" />
          </div>
          <textarea
            name="description"
            className="text-area"
            placeholder="List Job description, responsibilities, achievements here....."
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
