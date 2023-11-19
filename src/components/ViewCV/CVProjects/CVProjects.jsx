import "./CVProjects.css";

export default function CVProjects({ projects }) {
  return (
    <div className="projects-header printer">
      <h2>PROJECTS</h2>
      {projects.length === 0
        ? "No Education History Added"
        : projects.map((item) => {
            return (
              <div className="projects-body" key={item.key}>
                <div>
                  <h3>{item.project}</h3>
                  <p className="technologies">
                    Technologies used: {item.technologies}
                  </p>
                </div>
                <p className="description">{item.description}</p>
              </div>
            );
          })}
    </div>
  );
}
