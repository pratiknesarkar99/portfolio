export const ExperienceProjectDetails = ({ projectName, projectDesc }) => {
  debugger;
  return (
    // <div className="experienceDetails">
    <div className="experienceDetails-content">
      <div className="company-project-name">
        <h3>{projectName}</h3>
      </div>
      <div className="company-project-details">
        <ul>
          {Array.isArray(projectDesc) ? (
            projectDesc.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))
          ) : (
            <li>{projectDesc}</li>
          )}
        </ul>
        {/* <p>{projectDesc}</p> */}
      </div>
    </div>
    // </div>
  );
};
