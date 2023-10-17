import './Description.css'
import React from 'react';

function Description({description, setDescription}) {
    const handleSetDescription = (e) => {
      const val = e.target.value;
      setDescription(val);
      console.log(description)
    };
  
  return (
    <section className="section">
      <h2 className="title">Description</h2>
      <div role="textbox">
        <textarea
          name="summary"
          className="text-area"
          value={description}
          onChange={handleSetDescription}
          placeholder="Write your summary here....."
        ></textarea>
      </div>
    </section>
  );
}

export default Description;