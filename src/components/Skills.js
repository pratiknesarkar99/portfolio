import React, { useState } from 'react';
import skillReact from '../assets/img/skill-react.svg';
import skillRedux from '../assets/img/skill-redux.svg';
import skillNodeJs from '../assets/img/skill-node-js.svg';
import skillMongoDB from '../assets/img/skill-mongodb.svg';
import skillExpress from '../assets/img/skill-express.svg';
import skillHtml from '../assets/img/skill-html5.svg';
import skillCss from '../assets/img/skill-css3.svg';
import skillJavaScript from '../assets/img/skill-javascript.svg';
import skillJava from '../assets/img/skill-java.svg';
import skillTypeScript from '../assets/img/skill-typescript.svg';
import devops from '../assets/img/devops.svg';
import skillSql from '../assets/img/skill-sql.svg';
import skillJest from '../assets/img/skill-jest.svg';
import dotNet from '../assets/img/dotnet.svg';
import skillGit from '../assets/img/skill-git.svg';
import skillN8n from '../assets/img/n8n-color.svg';
import skillVoiceFlow from '../assets/img/voice-flow.jpg';
import skillNotion from '../assets/img/notion.png';
import skillSupabase from '../assets/img/supabase.png';
import skillOpenAi from '../assets/img/open-ai.svg';

import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const skills = [
    { src: skillN8n, name: 'n8n' },
    { src: skillVoiceFlow, name: 'Voiceflow' },
    { src: skillNotion, name: 'Notion' },
    { src: skillSupabase, name: 'Supabase' },
    { src: skillOpenAi, name: 'OpenAi' },
    { src: skillReact, name: 'React Js' },
    { src: skillRedux, name: 'Redux' },
    { src: skillNodeJs, name: 'Node Js' },
    { src: skillExpress, name: 'Express' },
    { src: skillMongoDB, name: 'MongoDB' },
    { src: skillJavaScript, name: 'JavaScript' },
    { src: skillHtml, name: 'HTML' },
    { src: skillCss, name: 'CSS' },
    { src: devops, name: 'Azure DevOps' },
    { src: skillTypeScript, name: 'TypeScript' },
    { src: skillJava, name: 'Java' },
    { src: skillSql, name: 'SQL' },
    { src: skillJest, name: 'Jest' },
    { src: dotNet, name: '.Net' },
    { src: skillGit, name: 'Git' },
  ];

  const visibleSkills = isExpanded ? skills : skills.slice(0, 15);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="header">Skills</h2>
              <div className="skill-slider">
                {visibleSkills.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.src} alt={skill.name} />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </div>
              <button
                className="see-more-btn"
                onClick={toggleExpand}
              >
                {isExpanded ? 'See Less...' : 'See More...'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
