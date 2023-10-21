import 'ViewCV.css'

export default function ViewCV({
  info,
  description,
  education,
  experience,
}) {
  return (
    <div className="view-container">
      <CvHeader
        name={info.name}
        phone={info.phone}
        address={info.address}
        email={info.email}
      />
      <CvDescription description={description} />
      <CvEducation education={education} />
      <CvExperience experience={experience} />
    </div>
  );
};