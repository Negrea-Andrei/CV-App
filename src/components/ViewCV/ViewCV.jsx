import "./ViewCV.css";
import CVHeader from "./CVHeader/CVHeader";
import CVDescription from "./CVDescription/CVDescription";
import CVEducation from "./CVEducation/CVEducation";
import CVExperience from "./CVExperience/CVExperience";
import CVSkills from "./CVSkills/CVSkills";


export default function ViewCV({ info, description, education, experience,skills }) {
  return (
    <div className="view-container print-only">
      <CVHeader
        name={info.name}
        email={info.email}
        phone={info.phone}
        address={info.address}
      />
      <CVDescription description={description} />
      <CVExperience experience={experience} />
      <CVSkills skills={skills} />
      <CVEducation education={education} />      
    </div>
  );
}
