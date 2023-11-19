import React, { useState } from "react";
import "./Projects.css";

export default function Projects({
  projects, addProjects, setProjects
}) {
  const handleAddProjects = (e) => {
    e.preventDefault();
    addProjects();
  };

  const handleRemoveSegment = (key) => {
    const index = projects.findIndex((item) => item.key === key);
    if (index !== -1) {
      let dupProjects = [...projects];
      dupProjects.splice(index, 1);
      setProjects(dupProjects);
    }
  };

  const handleSetInfo = (e, index) => {
    const val = e.target.value;
    const key = e.target.name;

    let dupProjects = [...projects];
    dupProjects[index][key] = val;
    setProjects(dupProjects);
  };

  return (
    <section className="section">
      <h2 className="title">Projects</h2>
      <button className="add-segment" onClick={(e) => handleAddProjects(e)}>
        <span>
          <i className="fa-solid fa-plus fa-2xl"></i>
        </span>
      </button>
      {projects.map((projectsField, index) => (
        <div key={projectsField.key} data-index={index}>
          <div className="grid projects">
            <input
              placeholder="Project name"
              type="text"
              id="project"
              name="project"
              value={projectsField.project}
              onChange={(e) => handleSetInfo(e, index)}
            />
            <input
              placeholder="Technologies used"
              type="text"
              id="technologies"
              name="technologies"
              value={projectsField.technologies}
              onChange={(e) => handleSetInfo(e, index)}
            />
          </div>
          <textarea
            name="description"
            className="text-area"
            onChange={(e) => handleSetInfo(e, index)}
            value={projectsField.description}
            placeholder="Enter the details of the project......"
          ></textarea>
          <button className="input-button" onClick={() => handleRemoveSegment(projectsField.key)}>
            Delete <i className="fas fa-trash-alt"></i>
          </button>
          <div className="divider"></div>
        </div>
      ))}
      {projects.length === 0 && (
        <span className="warning">Please add a project field</span>
      )}
    </section>
  );
}
