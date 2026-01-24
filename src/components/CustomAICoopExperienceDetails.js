import { Link, Link45deg } from 'react-bootstrap-icons';
import caisLogo from '../assets/img/cais-logo.jpg';
import { ExperienceProjectDetails } from './ExperiencePojectDetails';

export const CustomAICoopExperienceDetails = () => {
  const companyProjects = [
    {
      projName: 'AgenticOS Development',
      projDesc: [
        `[Placeholder] Description of work on the AgenticOS project.`,
        `[Placeholder] Key contribution or achievement.`,
        `[Placeholder] Technologies used or skills applied.`,
      ]
    },
  ];

  return (
    <div className="experienceDetails">
      <div className="experienceDetailsHeader">
        <div className="company-logo">
          <a href="https://customaistudio.io/" target="_blank">
            <img src={caisLogo} className='company-logo-icon' alt="React" />
            <Link45deg color='#fff'></Link45deg>
          </a>
        </div>
        <div className="company-details">
          <h2>Custom AI Studio</h2>
          <h4>AI Development Co-op (January 2026 - Present)</h4>
        </div>
      </div>
      {
        companyProjects.map(project => {
          return (
            <ExperienceProjectDetails
              projectName={project.projName}
              projectDesc={project.projDesc}
              isCollapsible={true} // Pass a prop to enable collapsible functionality
            />
          );
        })
      }
    </div >
  );
};
