import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
  const [status, setStatus] = useState({});

  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <div className="heading">
            <h2 className="header-underline">About me</h2>
            <h3>
              I'm <span>Pratik Nesarkar</span>, a passionate developer & an aspiring Product Manager.
            </h3>
            <p>
              Full-Stack Developer with 4 years of experience in designing,
              developing, and maintaining enterprise grade desktop & web applications.
              <br />
              <br />

              <span style={{ display: "flex", fontSize: "smaller", textAlign: "justify" }}>I am currently pursuing my Master’s at Texas A&M University with a major in Management Information Systems. My focus is on leveraging processes, tools, and technologies to help organizations effectively manage IT products, drive revenue growth, and make a meaningful impact.

                I am a certified 'Professional SCRUM Master', a certification issued by Scrum.org that demonstrates my proficiency in efficiently managing SCRUM teams and my deep understanding of agile project lifecycle methodologies. I earned this certification after successfully passing the SCRUM assessment on September 15, 2024.
                <br />
                <br />

                Previously, I worked full-time as a Software Engineer at Bentley Systems, a leading provider of software solutions for the infrastructure industry. Over the course of three and a half years, I progressed from an Associate Software Engineer (2020) to my most recent role. During this time, I applied my skills in software engineering, data structures, and product development to design, code, test, and maintain software applications that support the planning, design, construction, and operation of Bentley’s infrastructure projects. During my summer internship at Bentley, I had the opportunity to explore several areas of product development, such as enhancing web application performance and usability, integrating cloud services and APIs, and implementing new website features and functionalities.
                <br />
                <br />

                I completed my Bachelor’s degree in Information Technology from KIT’s College of Engineering in 2020, where I built a strong foundation in programming, software engineering, databases, and algorithms. My Software Development Internship at Bentley Systems in 2019 gave me valuable hands-on experience with the software development lifecycle and industry best practices. Beyond academics, I actively contributed to the tech community by hosting multiple technical workshops on topics like Linux, Ethical Hacking, and System Programming. These experiences have sharpened my public speaking, leadership, and technical proficiency, equipping me with essential skills to thrive in the ever-evolving technology landscape.
                <br />
                <br />

                I am passionate about leveraging new technologies to solve complex problems and working with diverse and collaborative teams. My goal is to continuously grow as a leader and contribute to the digital transformation of the technology landscape.
              </span>
            </p>

            <a class="libutton" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=pratik-nesarkar" target="_blank"><span>Follow me on <b>LinkedIn</b></span></a>
          </div>
          {/* <Col size={12} md={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Get In Touch</h2>
                </div>
              )}
            </TrackVisibility>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};
