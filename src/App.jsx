import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Description from "./components/Description/Description";
import Education from "./components/Education/Education";

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

  return (
    <div className="container">
      <Header toggleState={toggleState} viewButton={viewButton} />
        {viewButton ? (
          <div className="contain">
            <Info />
            <Description />
            <Education education={education} />           
          </div>
        ) : (
          <div>NOT YET</div>
        )}
      </div>
  );
}

export default App;
