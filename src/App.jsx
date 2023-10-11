import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [viewButton, setViewButton] = useState(true);

  const toggleState = () => {
    setViewButton(!viewButton);
  }

  return (
    <div className="container">
      <Header toggleState={toggleState} viewButton={viewButton} />
      {viewButton ? <div>A</div> : <div>B</div>}
    </div>
  );
}

export default App;
