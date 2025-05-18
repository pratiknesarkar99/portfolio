import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon4 from '../assets/img/email-7593.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>


          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://linkedin.com/in/pratik-nesarkar/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
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
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>{`Vibe Coded using GitHub Copilot with <3`}<br />
              Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>


      </Container>
    </footer >
  );
};
