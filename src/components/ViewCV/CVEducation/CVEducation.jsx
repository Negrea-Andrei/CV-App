import './CVEducation.css';

export default function CVEducation({ education }) {
  return (
    <div className="education-header">
      <h2>
        Education
      </h2>
      {education.length === 0
        ? 'No Education History Added'
        : education.map((item) => {
            return (
              <div className="education-body">
                <div>
                  <h3>{item.school}</h3>
                  <p className="degree">{item.degree}</p>
                </div>
                <p className="description">{item.describe} </p>
                <p className="year">{item.start_school + ' - ' + item.finish_school}</p>
              </div>
            );
          })}
    </div>
  );
}