import "./CVEducation.css";

export default function CVEducation({ education }) {
  return (
    <div className="education-header printer">
      <h2>EDUCATION</h2>
      {education.length === 0
        ? "No Education History Added"
        : education.map((item) => {
            return (
              <div className="education-body" key={item.key}>
                <div>
                  <h3>{item.school}</h3>
                  <p className="degree">{item.degree}</p>
                </div>
                <p className="description">{item.describe} </p>
                {item.start_school && 
                  item.finish_school && (
                    <p className="year">
                      {item.start_school + " - " + item.finish_school}
                    </p>
                  )}
              </div>
            );
          })}
    </div>
  );
}
