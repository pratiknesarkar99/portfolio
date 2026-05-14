import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle, ChevronDoubleDown, FiletypePdf } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/email-7593.svg';

import myImg from "../assets/img/my-headshot.jpg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
  const period = 2000;

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <img src={myImg} alt='my-headshot' className='my-headshot' />
                  <span className="tagline">Howdy ! </span>
                  <h1>I'm Pratik</h1>
                  <h3>Masters in Management Information Systems</h3>
                  <h3>Texas A&M University '26</h3>
                  <p>
                    <b>Software Developer</b> and recent Texas A&M graduate (4.0 GPA), combining nearly <b>4 years
                      of industry experience</b> with a strong foundation in full-stack engineering, system design, and <u>AI-driven development</u>. Previously worked at Bentley
                    Systems building scalable solutions across enterprise platforms. Passionate about leveraging technology, business strategy, and
                    user-centric thinking to solve complex problems at scale. Actively exploring opportunities in <b>Software Development, Tech Consulting, &
                      Technical Product Management</b>.


                    {/* <b>Professional Software Developer</b> and recent graduate from Texas A&M University, with a M.S. in Information Systems <i>(4.0 GPA)</i>, Whoop!.
                    Prior to that, I pursued a B.Eng. in Information Technology followed by a professional experience in <b>Software Engineer</b> for about <b>4 years</b>. During this time I have developed strong foundation in full-stack web development, system design, and product-driven engineering.
                    Currently, I am expanding my expertise in system design and AI development, leveraging my technical background to build scalable user-centric solutions. */}
                  </p>
                  <div className="social-container">
                    <span className="social-icon">
                      <a
                        href="https://www.linkedin.com/in/pratik-nesarkar/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={navIcon1} alt="linkedin" />
                      </a>

                      <a
                        style={{ backgroundColor: "gray" }}
                        href="mailto:pratik.nesarkar@tamu.edu"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={navIcon4} alt="Icon" />
                      </a>

                      <a
                        href="https://github.com/pratiknesarkar99/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={navIcon3} alt="github" />
                      </a>
                    </span>
                    <a className="resume-button" href="https://drive.google.com/file/d/1N5ab3N2pcTxdiCvRLuj2IctfSFhYwtDN/view?usp=sharing " target="_blank" rel="noreferrer">
                      View My Resume <FiletypePdf size={25} />
                    </a>
                  </div>
                  <button>
                    <a className="more" href="#about">
                      More about me <ArrowRightCircle size={25} />
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img className="banner-img" src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <div className="scroll-button-container">
        <button className="scroll-button" onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>
          <ChevronDoubleDown className='banner-chev-down banner-img' size={25} />
          Learn more about my skills & experience
          <ChevronDoubleDown className='banner-chev-down banner-img' size={25} />
        </button>
      </div>
    </section >
  );
};
