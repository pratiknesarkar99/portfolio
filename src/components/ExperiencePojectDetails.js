import React, { useState } from 'react';

export const ExperienceProjectDetails = ({ projectName, projectDesc, isCollapsible }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="experienceDetails-content">
      <div className="company-project-name">
        <h3>{projectName}</h3>
      </div>
      <div className="company-project-details">
        <div className="blurred-list-wrapper">
          <ul>
            {Array.isArray(projectDesc) ? (
              projectDesc
                .slice(0, isExpanded ? projectDesc.length : 3) // Show all or first two points
                .map((desc, index) => (
                  <li
                    key={index}
                    className={index === 2 && !isExpanded ? 'blurred-item' : ''}
                  >
                    {desc}
                  </li>
                ))
            ) : (
              <li>{projectDesc}</li>
            )}
          </ul>
          {!isExpanded && (
            <button
              className="read-more-btn read-more-btn-styled"
              onClick={toggleExpand}
            >
              Show More...
            </button>
          )}
          {!isExpanded && <div className="blur-overlay"></div>}
        </div>
        {isExpanded && (
          <button
            className="read-less-btn read-more-btn-styled"
            onClick={toggleExpand}
          >
            Show Less...
          </button>
        )}
      </div>
    </div>
  );
};
