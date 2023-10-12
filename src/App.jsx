import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import Info from "./components/Info/Info";
import Education from "./components/Education/Education";

function App() {
  const [viewButton, setViewButton] = useState(true);

  const toggleState = () => {
    setViewButton(!viewButton);
  };

  return (
    <div className="container">
      <Header toggleState={toggleState} viewButton={viewButton} />
      <div className="sections-container">
        {viewButton ? (
          <div className="contain">
            <section>
              <Description />
            </section>
            <section>
              <Info />
            </section>
            <section>
              <span>Education</span>
              <Education />
            </section>
            <section>              
              <span>Work Experience</span>
            </section>
          </div>
        ) : (
          <div>NOT YET</div>
        )}
      </div>
    </div>
  );
}

export default App;
