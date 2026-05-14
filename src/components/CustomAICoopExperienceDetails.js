import { Link, Link45deg } from 'react-bootstrap-icons';
import caisLogo from '../assets/img/cais-logo.jpg';
import { ExperienceProjectDetails } from './ExperiencePojectDetails';

export const CustomAICoopExperienceDetails = () => {
  const companyProjects = [
    {
      projName: 'AgenticOS - Claude Agent Web UI',
      projDesc: [
        `Developing a multi-tenant web application enabling users to interact with Claude AI using their Pro/Max subscriptions, featuring workspaces ("Spaces") for managing multiple chat sessions.`,
        `Building real-time streaming chat functionality using WebSocket connections and the Claude Agent SDK, with session persistence for seamless conversation resumption.`,
        `Implementing dual authentication architecture using Clerk for user identity management and Anthropic OAuth (PKCE) for secure API access with per-user credential isolation.`,
        `Designing React 18 frontend with TypeScript and Vite, integrating Convex for real-time serverless database operations and building a file browser/editor for project management.`,
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
