import 'ViewCV.css'

export default function ViewCV({
    info,
    description,
    education,
    experience,
  }) {
    return (
      <div className="cv-preview-container">
        <CvHeader
          name={generalInfo.name}
          phone={generalInfo.phone}
          address={generalInfo.address}
          email={generalInfo.email}
        />
        <CvDescription description={description} />
        <CvEducation education={education} />
        <CvExperience experience={experience} />
      </div>
    );
  }
  
  ;