import { Link45deg } from 'react-bootstrap-icons';
import bentleyLogo from '../assets/img/bentley-logo.png';
import { ExperienceProjectDetails } from './ExperiencePojectDetails';

export const BentleySweExperienceDetails = () => {
  const companyProjects = [
    {
      projName: 'iTwin Experience',
      projDesc: [
        `Engineered 15+ reusable React components for global 3D modelling product teams, utilizing the dynamic component architecture, boosting uniform UX and improving performance by 37%.`,
        `Implemented a robust data management system for iTwin Experience, allowing users to efficiently manage and organize their 3D models and associated data. Developed features for data import/export, version control, and collaboration, ensuring seamless integration with existing workflows and enhancing productivity and saving clients ~$500K annually.`,
        `Secured and optimized 20+ REST APIs in microservice architecture using Express.js, by enforcing strict validation and test-driven development principles eliminating 28% of critical vulnerabilities.`,
        `Drove team performance through use of agile proof of concept (POC) based software development approach, expediting feature development using Azure DevOps CI/CD pipelines for streamlined artifact generation and deployment, mitigating risk of late-stage failure and achieving a ~15% increase in OKRs.`,
        `Developed a dynamic, configurable dashboard manager for iTwin Experience, enabling users to visualize and interact with 3D models in real-time, enhancing user experience and engagement. Implemented advanced rendering techniques and optimized performance for smooth navigation and interaction with large datasets.`,
        `Revamped the iTwin Experience UI/UX, enhancing user experience and engagement by implementing a modern design system and improving accessibility features. Conducted user research and usability testing to gather feedback and iterate on design solutions, resulting in a 25% increase in user satisfaction scores.`,
        `Designed and implemented a comprehensive testing framework for iTwin Experience, ensuring high-quality software delivery and reducing bugs by 30%. Utilized Jest and React Testing Library for unit and integration testing, and established best practices for code reviews and continuous integration.`
      ]
    },
    {
      projName: 'MicroStation',
      projDesc: [
        `Enhanced reliability and security of MicroStation 3D modelling software by upgrading legacy codebase, revamped unsafe C++ native code, achieving 28% improvement in the 2021-Q4 security audit report.`,
        `Implemented a new feature for MicroStation, collaborated with cross-functional teams to gather requirements and ensure seamless integration with existing workflows and pro-active bug fixes.`,
        `Participated in code reviews and provided constructive feedback to team members, fostering a culture of continuous improvement and knowledge sharing. Mentored junior developers on best practices for C++ development and software engineering principles.`,
        `PDF output print bug fixes and enhancements for MicroStation, ensuring high-quality output and improved user experience. Collaborated with QA team to identify and resolve issues, resulting in a 20% reduction in customer-reported bugs related to PDF printing.`,
      ]
    },
    {
      projName: 'OpenTower iQ',
      projDesc: [
        `Fixed 20+ bugs in OpenTower iQ, a web-based application for managing and optimizing tower assets, ensuring high-quality software delivery and improved website responsiveness using dynamic SCSS styling and reusable pieces of code.`,
        `Header Bar UI enhancements for OpenTower iQ, increasing page content area and accessibility. Collaborated with UX team to gather feedback and iterate on design solutions, resulting in a 15% increase in user satisfaction scores.`,
        `Developed a utility for tower face point calculation for OpenTower iQ, enabling accurate calculation and visualization of tower face points in 3D models.`,
        `Integrated Kendo Grid into OpenTower iQ, enhancing grid functionality and performance reducing the time taken to load large datasets by 30%. Enable sorting, filtering, and pagination features for the Kendo Grid to specifically meet the needs of OpenTower iQ with multi level rows which was never possible earlier.`,
        `Implmented complete Unit testing framework using n-unit and jest for OpenTower iQ, ensuring high-quality software delivery and reducing bugs by 30%. The product was completely missing any kind of unit testing framework and the team was facing a lot of issues with the code quality and bugs. Leveraged my experience with Plantsight unit testing to implement similar framework for OpenTower iQ.`,
        `Utilized the Portal BFF to create a Notification Service for OTiQ, enabling real-time notifications and alerts for users. Implemented a scalable architecture using microservices and event-driven design patterns, ensuring high availability and reliability of the notification system. This was utilized to send notifications to users for any changes in the data or any new updates in the application. The notification service was integrated with the existing OTiQ application, providing a seamless user experience and improving overall system performance.`,
      ]
    },
    {
      projName: 'PlantSight',
      projDesc: [
        `Backend GraphQL API for context side navigation pane to support PlantSight frontend application, enabling users to navigate and interact with 3D plant models and associated data in a more intuitive and efficient manner. Added advanced search and filtering capabilities, allowing users to quickly find relevant information and streamline their workflows.`,
        `Completed Quick Links POC implementation enabling users to easily access frequently used features and tools. Worked with the UX team to understand the mockups, design solutions and created intuitive UI elements, resulting in a 35% decrease in time spent in finding plant modeling tools.`,
        `Added functionality to access multiple iModels in PlantSight, allowing PS5 users to work with multiple plant iModels simultaneously and improving collaboration and productivity.`,
        `Revamped several widget components that were part of the dashboard component, ensuring a consistent and modern design across the application. Enabled customization of the widgets and arrangement based on user preference, allowing users to tailor their workspace to their specific needs and preferences.`,
      ],
    },
    {
      projName: 'STAAD.Pro',
      projDesc: [
        `First major exposure to .Net Framework and C# programming language on enterprise desktop software, enabling me to quickly adapt to the Bentley development environment and contribute to the team. Completed several training modules and hands-on exercises to gain a solid understanding of the framework and its capabilities.`,
        `Contributed to integrating Microsoft Telerik UI controls for STAAD.Pro, enhancing the user interface and improving overall user experience.`,
        `Implemented Direct Analysis for physical modeler in STAAD.Pro, enabling users to perform advanced analysis and design of structures. Worked closely with the engineering team to understand the requirements and ensure accurate integration with existing workflows.`,
        `Added feature tracking for missing features, enabling the administrators to easily identify and track feature usage and functionality. Used GUID generation and tracking to ensure accurate reporting and analysis of feature usage, allowing for better decision-making and prioritization of future development efforts.`,
        `Localized newly added strings in the desktop application, ensuring that the software is accessible to a global audience and meets the needs of users in different regions. Worked with the localization team to ensure accurate translations and cultural adaptations, resulting in a more user-friendly experience for non-English speaking users.`,
        `Added missing error logging panel making sure that errors are properly captured and reported to the user. Implemented a robust error handling framework using C# and .Net, allowing for better debugging and troubleshooting of issues. This was a major issue with the product as the users were not able to understand what went wrong when they encountered an error. The new error handling and logging system provided clear and concise error messages, allowing users to quickly identify and resolve issues.`,
        `Added the most important 'Whats New' version information, allowing the users to be notified of the latest features and enhancements in the application itself, in addition to the exisiting documentation. Worked with cross-functional teams to allow engaging and informative content, resulting in a more informed user base and increased adoption of new features. This was a major feature in the 2020 release of STAAD.Pro, providing users with a comprehensive overview of the latest enhancements and improvements in the software. The 'Whats New' feature was well-received by users and contributed to a more positive user experience overall.`,
      ],
    },

  ];

  return (
    <div className="experienceDetails">
      <div className="experienceDetailsHeader">
        <div className="company-logo">
          <a href="https://www.bentley.com/" target="_blank" rel="noreferrer">
            <img src={bentleyLogo} className='company-logo-icon' alt="React" />
            <Link45deg color='#fff'></Link45deg>
          </a>
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
            projectDesc={project.projDesc} // Show only the first two points initially
            isCollapsible={true} // Pass a prop to enable collapsible functionality
          />
        );
      })}
    </div>
  );
};
