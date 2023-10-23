import "./ViewCV.css";
import CVHeader from "./CVHeader/CVHeader";
import CVDescription from "./CVDescription/CVDescription";
import CVEducation from "./CVEducation/CVEducation";

export default function ViewCV({ info, description, education, experience }) {
  return (
    <div className="view-container">
      <CVHeader
        name={info.name}
        email={info.email}
        phone={info.phone}
        address={info.address}
      />
      <CVDescription description={description} />
      <CVEducation education={education} />
    </div>
  );
}
