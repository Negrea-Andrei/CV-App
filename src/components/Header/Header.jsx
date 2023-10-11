import React from "react";
import "./Header.css";

export default function Header({ toggleState, viewButton }) {
  return (
    <>
      <header className="header">
        <h1>Create the perfect CV &nbsp;<i className="fa-regular fa-file-lines fa-xs"></i></h1>
        <div className="header-buttons">
          {viewButton ?
            <i onClick={toggleState} class="fa-solid fa-eye fa-2xl"></i> :
            <div className='test'>
              <i onClick={toggleState} class="fa-solid fa-print fa-2xl"></i>
              <i onClick={toggleState} class="fa-solid fa-pen fa-2xl"></i>
            </div>
          }
        </div>
      </header>
    </>
  );
}
