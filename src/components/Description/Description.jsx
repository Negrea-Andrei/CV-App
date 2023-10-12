import React from 'react';
import './Description.css';

function Description() {
  
  return (
    <section className="section">
      <h2 className="title">Description</h2>
      <div className="textbox">
        <input type='text'
          name="summary"
          className="text-area"
          placeholder="Please enter a short description here..."
        ></input>
      </div>
    </section>
  );
}

export default Description;