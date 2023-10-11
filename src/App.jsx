import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [viewButton, setViewButton] = useState(true);

  const Click = () => {
    setViewButton(!viewButton);
  }

  return (
    <div className="container">
      <Header Click={Click} viewButton={viewButton} />
      {viewButton ? <div>A</div> : <div>B</div>}
    </div>
  );
}

export default App;
