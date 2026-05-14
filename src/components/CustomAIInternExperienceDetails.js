import { Link, Link45deg } from 'react-bootstrap-icons';
import caisLogo from '../assets/img/cais-logo.jpg';
import { ExperienceProjectDetails } from './ExperienceProjectDetails';

export const CustomAIInternExperienceDetails = () => {
  const companyProjects = [
    {
      projName: 'n8n AgenticAI Development',
      projDesc: [
        `Built and deployed end-to-end AI solutions using n8n, Voiceflow, and supporting platform integrations to automate customer qualification, routing, and escalation flows, reducing manual triaging by 85%.`,
        <span>Designed the super-fast email AI agent with less than 60 secs. of turnaround time as opposed to earlier longer than 20 mins. wait times for simple FAQ type queries involved with manual processes. <a href="https://www.loom.com/share/3b901b9a61f34eb0b189432ce494a1c7?sid=2e48dea0-a25b-4bdb-b4c4-778385353ed0" target="_blank" rel="noopener noreferrer">(Click to watch the full technical demostration)</a></span>,
        `Employed agile methodologies to enhance the development process through super-fast sprints, ensuring delivery of requested features and improvements while maintaining high code quality within just 2 days of project initiation.`,
        `Designed multi-step conversational and backend workflow logic for AI-driven apps, integrating external systems, approval checkpoints, and structured data handoffs for reliable human-in-the-loop execution.`,
        `Architected normalized database schemas in Supabase to unify legal, CRM, and comms data from 10+ platforms, powered real-time sync and RAG workflows, slashing reconciliation time by 70%.`,
        `Engineered API-driven backend workflows for Agentic AI applications using webhooks, payload mappings, and Supabase data models to integrate 10+ external platforms for real-time data sync across client systems.`,
        `Drove product discovery and GTM planning for Meahana, an AI-powered meeting assistant, led client interviews, defined metrics, and secured MVP buy-in to enable scalable multi-platform rollout.`
      ]
    },
  ];

  return (
    <div className="experienceDetails">
      <div className="experienceDetailsHeader">
        <div className="company-logo">
          <a href="https://customaistudio.io/" target="_blank" rel="noreferrer">
            <img src={caisLogo} className='company-logo-icon' alt="React" />
            <Link45deg color='#fff'></Link45deg>
          </a>
        </div>
        <div className="company-details">
          <h2>Custom AI Studio</h2>
          <h4>AI Development Intern (May 2025 - May 2026)</h4>
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
