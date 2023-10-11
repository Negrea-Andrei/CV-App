import React from "react";
import "./Header.css";

export default function Header({ Click, viewButton }) {
  return (
    <>
      <header className="header">
        <h1 onClick={Click}>Create the perfect CV <i className="fa-regular fa-file-lines fa-xs"></i></h1>
        <div className="header-buttons">
          {viewButton ?
            <i onClick={Click} class="fa-solid fa-eye fa-2xl"></i> :
            <div className='test'>
              <i onClick={Click} class="fa-solid fa-print fa-2xl"></i>
              <i onClick={Click} class="fa-solid fa-pen fa-2xl"></i>
            </div>
          }
        </div>
      </header>
    </>
  );
}
