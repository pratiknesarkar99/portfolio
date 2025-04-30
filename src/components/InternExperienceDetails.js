import bentleyLogo from '../assets/img/bentley-logo.png';
import { ExperienceProjectDetails } from './ExperiencePojectDetails';

export const InternExperienceDetails = () => {
  const companyProjects = [
    {
      projName: 'MyAnalytics Dashboard',
      projDesc: [
        `Developed a modular website template in JavaScript, integrating RxJS for state management to enhance scalability and reusability, cutting redundant development efforts by 35% across 8 Bentley products.`,
        `Presented technical demonstrations during corporate presentations, clearly articulating feature capabilities and key deliverables, resulting in increased product visibility and notable boost in client engagement.`,
      ]
    },

  ];

  return (
    <div className="experienceDetails">
      <div className="experienceDetailsHeader">
        <div className="company-logo">
          <img src={bentleyLogo} alt="React" />
        </div>
        <div className="company-details">
          <h2>Bentley Systems</h2>
          <h4>Summer Intern (June 2019 - Aug 2019)</h4>
        </div>
      </div>
      {companyProjects.map(project => {
        return (
          <ExperienceProjectDetails
            projectName={project.projName}
            projectDesc={project.projDesc}
          />
        );
      })}
    </div>
  );
};
