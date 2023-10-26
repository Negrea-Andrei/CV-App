import "./CVSkills.css";

export default function CVSkills({ skills }) {
  return (
    <div className="skills-header printer">
      <h2>Skills</h2>
      <ul className="skills-body">
        {skills.map((talent) => {
          if (talent.name !== "") {
            return (
              <li key={talent.key}>
                {talent.name}
              </li>
            );
          }
          return null; // or you can use an empty fragment <></>
        })}
      </ul>
    </div>
  );
}