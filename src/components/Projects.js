import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/boxer-properties.jpg';
import projImg3 from '../assets/img/iot-fuel-monitoring.jpg';
import projImg2 from '../assets/img/portfolio-website.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from 'react';
import { ProjectDesc } from './ProjectDesc';

export const Projects = () => {
  const [showDesc, setShowDesc] = useState(false);
  const [selectedProj, setSelectedProj] = useState({});

  const projects = [
    {
      id: 1,
      title: 'Boxer Properties – Client Retention Solution',
      description: 'AI-powered CRM upgrade to improve tenant retention and boost manager performance',
      imgUrl: projImg1,
      liveSite: true,
      liveSiteBtnName: 'GitHub Link',
      liveUrl: 'https://github.com/pratiknesarkar99/boxerpropertiescase',
      tech: 'Figma, Miro, React Query, Supabase, PowerBI, OpenAI',
      fullDesc:
        'Led a business process improvement initiative focused on enhancing tenant retention for Boxer Properties by integrating AI-powered decision systems with their in-house CRM.\nDeveloped a Next Best Action (NBA) system using historical and real-time ticket data to recommend proactive property management steps and automate low-priority issue resolution.\nBuilt interactive dashboards using PowerBI for visualizing tenant trends, manager performance, and resolution timelines.\nDesigned and implemented a staged rollout strategy with pilot testing, user feedback, and continuous training plans for property managers.\nThe solution enabled consistency in service quality, reduced tenant churn, and improved visibility into ticket progress through automated notifications and data-driven insights.'
    },
    {
      id: 2,
      title: 'Photos by Pratik – Immersive Portfolio Site',
      description: 'Fully responsive website for portfolio showcase with user/admin profile management',
      imgUrl: projImg2,
      liveSite: true,
      liveSiteBtnName: 'GitHub Link',
      liveUrl: 'https://github.com/pratiknesarkar99/photosbypratik',
      tech: 'HTML, CSS, JavaScript, PHP, MySQL',
      fullDesc:
        'Built a fully dynamic photography portfolio website as part of a college mini project, enabling users to sign in and view curated photography collections by Pratik Shailesh Nesarkar.\nDesigned a sleek, dark-themed user interface with responsive layouts to ensure accessibility across devices.\nImplemented authentication and backend logic using PHP and MySQL, allowing secure user login and database interactions.\nIntegrated server-side configuration to support hosting on both local environments (XAMPP/WAMP) and public servers (e.g., 000webhost).\nThis project showcased full-stack web development skills, from UI/UX to backend configuration, and remains actively hosted at photosbypratik.com.'
    },
    {
      id: 3,
      title: 'IoT-Based Smart Fuel Monitoring System',
      description: 'Real-time fuel fraud detection using IoT sensors and Android devices over Firebase',
      imgUrl: projImg3,
      liveSite: true,
      liveUrl: 'https://github.com/pratiknesarkar99/FuelMonitoring',
      tech: 'Arduino, Android Studio, Java, XML, Firebase, IoT Sensors',
      liveSiteBtnName: 'GitHub Link',
      fullDesc:
        'Designed and deployed a smart IoT solution to detect fuel theft and monitor consumption in real time by integrating Android mobile interfaces with Arduino-powered sensor hardware.\nImplemented linear regression models to analyze input-output fuel flow data, achieving 97.5% accuracy in identifying anomalies and optimizing vehicle performance.\nThe system included real-time alerts, low fuel warnings, and GPS-based recommendations for high-rated fuel stations, enhancing usability and user trust.\nDeployed the full stack (hardware and mobile app) in under 5 months using agile iterations, demonstrating strong systems thinking and rapid development under resource constraints.\nData was continuously synced to the cloud for anytime-anywhere access, enabling robust record-keeping and fraud tracking.'
    },
  ];

  function onSetOfProject(id) {
    let findSelectedProj = projects.filter(proj => {
      return proj.id === id;
    });
    setSelectedProj(findSelectedProj[0]);
    setShowDesc(true);
  }

  function onCloseDesc() {
    setShowDesc(false);
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <h2 className="header-underline">Projects</h2>

                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          onReadMore={onSetOfProject}
                        />
                      );
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {<img className="background-image-right" src={colorSharp2}></img>}
      {showDesc && (
        <Container>
          <Row>
            <Col size={12}>
              <ProjectDesc
                key={selectedProj.title}
                {...selectedProj}
                onCloseDesc={onCloseDesc}
              />
            </Col>
          </Row>
        </Container>
      )}
      <Container className="text-center mt-4">
        <a
          href="https://github.com/pratiknesarkar99"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark"
        >
          <i className="fab fa-github" style={{ fontSize: '20px' }}></i>
          Visit <b>GitHub</b> to view more awesome projects!
        </a>
      </Container>
    </section>
  );
};
