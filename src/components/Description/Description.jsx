import './Description.css'
import React from 'react';

function Description() {
  
  return (
    <section className="section">
      <h2 className="title">Description</h2>
      <div role="textbox">
        <textarea
          name="summary"
          className="text-area"
          placeholder="Write your summary here....."
        ></textarea>
      </div>
    </section>
  );
}

export default Description;