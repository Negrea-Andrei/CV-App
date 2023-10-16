import React from "react";
import "./Header.css";

export default function Header({ toggleState, viewButton }) {
  return (
    <>
      <header className="header">
        <h1>
          Create the perfect CV &nbsp;
          <i className="fa-regular fa-file-lines fa-xs"></i>
        </h1>
        <div className="header-buttons">
          {viewButton ? (
            <span>
              <i onClick={toggleState} className="fa-solid fa-eye fa-beat fa-2xl"></i>
            </span>
          ) : (
            <div className="test">
              <span>
                <i onClick={toggleState} className="fa-solid fa-print fa-2xl"></i>
              </span>
              <span>
                <i onClick={toggleState} className="fa-solid fa-pen fa-2xl"></i>
              </span>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
