import React, { useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Header.css";

const downloadCV = () => {
  const divToDownload = document.querySelector(".view-container");

  if (divToDownload) {
    html2canvas(divToDownload, { useCORS: true }).then(function (canvas) {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");

      const imgHeight = 297;
      const imgWidth = 210;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      pdf.save("cv.pdf");
    });
  }
};

export default function Header({ toggleState, viewButton, Print }) {
  useEffect(() => {}, []);

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
              <div className="cv-actions">
                <span>
                  <i onClick={Print} className="fa-solid fa-print fa-2xl"></i>
                </span>
                <span>
                  <i
                    onClick={downloadCV}
                    className="fa-solid fa-download fa-2xl"
                  ></i>
                </span>
              </div>
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
