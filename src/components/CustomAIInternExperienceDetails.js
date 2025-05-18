import { Link, Link45deg } from 'react-bootstrap-icons';
import caisLogo from '../assets/img/cais-logo.jpg';
import { ExperienceProjectDetails } from './ExperiencePojectDetails';

export const CustomAIInternExperienceDetails = () => {
  const companyProjects = [
    {
      projName: 'n8n AgenticAI Development',
      projDesc: [
        `Engaged in learning & development of n8n workflows for interview project using low-code automation tools, utilizing TypeScript and Node.js to implement automated FAQ email support capabilities.`,
        `Designed the super-fast email AI agent with < 60 secs. of turnaround time as opposed to earlier longer than 20 mins. wait times for simple FAQ type queries involved with manual processes.`,
        `Employed agile methodologies to enhance the development process through super-fast sprints, ensuring delivery of requested features and improvements while maintaining high code quality within just 2 days of project initiation.`,
        <a href="https://www.loom.com/share/3b901b9a61f34eb0b189432ce494a1c7?sid=2e48dea0-a25b-4bdb-b4c4-778385353ed0" target="_blank" rel="noopener noreferrer">Link to loom video showcasing detailed walkthrough of the interview project (n8n Automation System for DnA Email Support)</a>,
        // `Collaborated with a team of developers to design and implement new features, improving the overall functionality and user experience of the platform.`,
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
          <h4>AI Development Intern (May 2025 - Present)</h4>
        </div>
      </div>
      {
        companyProjects.map(project => {
          return (
            <ExperienceProjectDetails
              projectName={project.projName}
              projectDesc={project.projDesc}
            />
          );
        })
      }
    </div >
  );
};
