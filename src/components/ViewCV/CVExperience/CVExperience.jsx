import "./CVExperience.css";

export default function CVExperience({ experience }) {
  return (
    <div className="education-header printer">
      <h2>WORK EXPERIENCE</h2>
      {experience.length === 0
        ? "No Work History Added"
        : experience.map((item) => {
            return (
              <div className="experience-body" key={item.key}>
                <div>
                  <h3>{item.company}</h3>
                  <p className="role">{item.role}</p>
                </div>
                <p className="description">{item.description} </p>
                {item.start && item.finish && (
                  <p className="year">{item.start + " - " + item.finish}</p>
                )}
              </div>
            );
          })}
    </div>
  );
}
