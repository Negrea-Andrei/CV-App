import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";

function App() {
  const [viewButton, setViewButton] = useState(true);

  const toggleState = () => {
    setViewButton(!viewButton);
  };

  return (
    <div className="container">
      <Header toggleState={toggleState} viewButton={viewButton} />
        {viewButton ? (
          <div className="contain">
            <Info />           
          </div>
        ) : (
          <div>NOT YET</div>
        )}
      </div>
  );
}

export default App;
