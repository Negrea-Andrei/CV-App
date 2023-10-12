import './Education.css';
import React, { useState } from 'react';

function Education() {

  return (
    <div>
      <div className="grid">
        <input
          name="school"
          type="text"
          placeholder="University/School Name"
        />
        <input
          name="location"
          type="text"
          placeholder="Location"
        />
        <input
          name="from"
          type="text"
          placeholder="From"
        />
        <input
          name="to"
          type="text"
          placeholder="To"
        />
      </div>
      <input
        name="qualification"
        className="input-full-width"
        type="text"
        placeholder="Degree/Qualification Type"
      />
      
      <button className="input-button">
        Delete <i className="fas fa-trash-alt"></i>
      </button>
      <hr className="line" />
    </div>
  );
}

export default Education;