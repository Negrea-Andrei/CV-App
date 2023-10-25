import "./CVSkills.css";

export default function CVSkills({ skills }) {
  return (
    <div className="skills-header">
      <h2>Skills</h2>
      <ul className="view-skills-grid">
        {skills.map((talent) => {
          if (talent !== "") {
            return (
              <li key={talent}>
                {talent}
              </li>
            );
          }
          return null; // or you can use an empty fragment <></>
        })}
      </ul>
    </div>
  );
}