import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [viewButton, setViewButton] = useState('true')

  const Click = () => {
    setViewButton(!viewButton)
  }
  return (
    <>
      <header className="header">
        <h1 onClick={Click}>Create the perfect CV <i class="fa-regular fa-file-lines fa-xs"></i></h1>     
        <div className="header-buttons">
          {viewButton ?
        <i onClick={Click} class="fa-regular fa-file-lines fa-2xl"></i> : <i onClick={Click} class="fa-solid fa-car fa-2xl"></i>}</div> 
      </header>
    </>
  );
}
