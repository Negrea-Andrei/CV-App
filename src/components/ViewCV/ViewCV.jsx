import "./ViewCV.css";
import CVHeader from "./CVHeader/CVHeader";
import CVDescription from "./CVDescription/CVDescription";
import CVEducation from "./CVEducation/CVEducation";
import CVExperience from "./CVExperience/CVExperience";
import CVSkills from "./CVSkills/CVSkills";
import CVProjects from "./CVProjects/CVProjects"


export default function ViewCV({ info, description, education, experience,skills, projects }) {
  return (
    <div className="view-container print-only">
      <CVHeader
        name={info.name}
        email={info.email}
        phone={info.phone}
        address={info.address}
      />
      <CVDescription description={description} />
      <CVProjects projects={projects} />
      <CVSkills skills={skills} />
      <CVExperience experience={experience} />      
      <CVEducation education={education} />      
    </div>
  );
}
