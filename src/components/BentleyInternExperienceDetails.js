import { Link45deg } from 'react-bootstrap-icons';
import bentleyLogo from '../assets/img/bentley-logo.png';
import { ExperienceProjectDetails } from './ExperiencePojectDetails';

export const BentleyInternExperienceDetails = () => {
  const companyProjects = [
    {
      projName: 'MyAnalytics Dashboard',
      projDesc: [
        `Developed a modular website template in JavaScript, integrating RxJS for state management to enhance scalability and reusability, cutting redundant development efforts by 35% across 8 Bentley products.`,
        `Followed best practices of contributing to collaborative Git project repositories, including code reviews and documentation, ensuring high-quality code and fostering collaboration within the team.`,
        `Presented technical demonstrations during corporate presentations, clearly articulating feature capabilities and key deliverables, resulting in increased product visibility and notable boost in client engagement.`,
      ]
    },

  ];

  return (
    <div className="experienceDetails">
      <div className="experienceDetailsHeader">
        <div className="company-logo">
          <a href="https://www.bentley.com/" target="_blank">
            <img src={bentleyLogo} className='company-logo-icon' alt="React" />
            <Link45deg color='#fff'></Link45deg>
          </a>
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
            isCollapsible={true} // Pass a prop to enable collapsible functionality
          />
        );
      })}
    </div>
  );
};
