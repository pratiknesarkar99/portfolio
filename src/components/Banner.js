import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle, FiletypePdf } from 'react-bootstrap-icons';
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

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => {
  //     clearInterval(ticker);
  //   };
  // }, [text]);

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting
  //     ? fullText.substring(0, text.length - 1)
  //     : fullText.substring(0, text.length + 1);

  //   setText(updatedText);

  //   if (isDeleting) {
  //     setDelta(prevDelta => prevDelta / 2);
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setIndex(prevIndex => prevIndex - 1);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === '') {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(500);
  //   } else {
  //     setIndex(prevIndex => prevIndex + 1);
  //   }
  // };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
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
                    A graduate student at the Mays Business School, with a <b>4.0 GPA</b> expected to graduate by <u>May 2026</u>!
                    I hold a B.Eng. in Information Technology with a GPA of 3.90/4.0.
                    Having worked as a <b>Software Engineer</b> for about <b>4 years</b>, I have developed strong foundation in full-stack web development, system design, and product-driven engineering.
                    Currently, I am expanding my expertise into <b><u>Product Management</u></b>, leveraging my technical background to build scalable user-centric solutions.
                  </p>
                  <div>
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
                    <a className="resume-button" href="https://drive.google.com/file/d/16zxVPcTQ9xr6EAR5-hUrsc25CH-dqx56/view?usp=sharing">
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
    </section >
  );
};
