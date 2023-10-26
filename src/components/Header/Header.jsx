import React from "react";
import "./Header.css";

export default function Header({ toggleState, viewButton, Print}) {
  return (
    <>
      <header className="header no-print">
        <h1>
          Create the perfect CV &nbsp;
          <i className="fa-regular fa-file-lines fa-xs"></i>
        </h1>
        <div className="header-buttons">
          {viewButton ? (
            <span>
              <i onClick={toggleState} className="fa-solid fa-eye fa-2xl"></i>
            </span>
          ) : (
            <div className="actions">
              <span>
                <i onClick={Print} className="fa-solid fa-print fa-2xl"></i>
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
