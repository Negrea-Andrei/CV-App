import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Description from "./components/Description/Description";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";

function App() {
  const [viewButton, setViewButton] = useState(true);

  const toggleState = () => {
    setViewButton(!viewButton);
  };

  const education = [{
    school:'',
    degree:'',
    start_school:'',
    finish_school:'',
  }]

  const experience = ([
    {
      company: '',
      location: '',
      from: '',
      to: '',
      role: '',
      description: '',
    },
  ]);

  return (
    <div className="container">
      <Header toggleState={toggleState} viewButton={viewButton} />
        {viewButton ? (
          <div className="contain">
            <Info />
            <Description />
            <Education education={education} />
            <Work experience={experience} />           
          </div>
        ) : (
          <div>NOT YET</div>
        )}
      </div>
  );
}

export default App;
