import bentleyLogo from '../assets/img/bentley-logo.png';
import { ExperienceProjectDetails } from './ExperiencePojectDetails';

export const SweExperienceDetails = () => {
  const companyProjects = [
    {
      projName: 'iTwin Experience',
      projDesc: [
        `Engineered 15+ reusable React components for global 3D modelling product teams, utilizing the dynamic component architecture, boosting uniform UX and improving performance by 37%.`,
        `Developed and integrated reality data management platform to visualize IoT sensor data and optimized state management using Context APIs, doubling data-retrieval speed and saving clients ~$500K annually.`,
        `Secured and optimized 20 + REST APIs in microservice architecture using Express.js, by enforcing strict validation and test - driven development principles eliminating 28 % of critical vulnerabilities.`,
        `Drove team performance through use of agile proof of concept(POC) based approach, expediting feature development using Azure tools, mitigating risk of late - stage failure and achieving a ~15 % increase in OKRs.`,
        `Enhanced reliability and security of MicroStation 3D modelling software by upgrading legacy codebase, revamped unsafe C++ native code, achieving 28 % improvement in the 2021 - Q4 security audit report.`
      ]
    },
    {
      projName: 'MicroStation',
      projDesc: `- Contributed to the development of a banking audit reporting system for generating, enquiring and auditing quarterly reports. - Implemented role - based access control with five user levels, featuring a dynamic React UI for personalized access and security. - Developed RESTful APIs using Node.js, Express.js, and Oracle SQL to enable efficient data processing and integration.
`,
    },
    {
      projName: 'OpenTower iQ',
      projDesc: `- Developed a user - friendly interface for Single Sign - On(SSO) functionality in React,
  enabling seamless authentication across multiple banking applications.
- Integrated RESTful APIs for backend communication, handling token - based
authentication and session management`,
    },
    {
      projName: 'PlantSight',
      projDesc: `- Contribute to the migration of existing Internal Banking web application to a browser independent Java based web application for a client with over 25,000 branches and
3, 800 transactions.
- Involved in development of various transaction screens in different modules like
Deposit, Loans, Customers etc.with help of technologies like Java struts, JavaScript
and SQL.
- Software development involves designing, analysis, coding, unit testing and debugging
the application.`,
    },
    {
      projName: 'STAAD.Pro',
      projDesc: `- Contribute to the migration of existing Internal Banking web application to a browser independent Java based web application for a client with over 25,000 branches and
3, 800 transactions.
- Involved in development of various transaction screens in different modules like
Deposit, Loans, Customers etc.with help of technologies like Java struts, JavaScript
and SQL.
- Software development involves designing, analysis, coding, unit testing and debugging
the application.`,
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
          <h4>Software Engineer (Sept 2020 - May 2024)</h4>
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
