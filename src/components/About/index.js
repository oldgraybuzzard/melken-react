import React, {useState} from "react";
import { Carousel, Container, Card, Button } from "react-bootstrap";
import carousel1 from '../../assets/img/info-managment.jpg';
import carousel2 from '../../assets/img/project-management.jpg';
import carousel3 from '../../assets/img/tech-content.jpg';
import carousel4 from '../../assets/img/engineering-support.jpg';
import IETM from '../../assets/icons/menu_book_black_24dp.svg';
import pm from '../../assets/icons/analytics.png';
function About(){
  const [pages] = useState([
    {
      name: 'about us'
    }
  ]);

  const [currentPage] = useState(pages[0]);
  

  return (
    <div>
    <Carousel className="about-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: "600px", opacity: 0.5}}
          src={carousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Information Management</h3>
          <p>Melken has provided information management solutions for multiple federal, state, and local agencies, medical offices, legal offices, Department of Defense (DoD) commercial contractors and vendors as well as various other firms from diverse industries.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: "600px",opacity: 0.5 }}
          src={carousel2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Project Management</h3>
          <p>Good Project Management influences more than an individual project, it affects the overall health of the entire company's project portfolio and the ability to advance the strategic objective.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: "600px", opacity: 0.5}}
          src={carousel3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Technical Content Management</h3>
          <p>Interactive Electronic Technical Manuals | Interactive Electronic Technical Publications | Data Management</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: "600px", opacity: 0.5, }}
          src={carousel4}
          alt="Third slide"
        />
      <Carousel.Caption>
          <h3>Logistics & Engineering Support</h3>
          <p>Field Services | System Test | Supportability Analysis</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container fluid className="about-what">
      <h2 className="text-center">
      What Do We Do?
      </h2>
      <div className="container">
        <div className="row">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={IETM} className="icon-ietm" />
          <Card.Body>
            <Card.Title>Interactive Electronic Technical Manuals (IETM)</Card.Title>
            <Card.Text>
            Accurate and readily available technical publications are essential to support safe and efficient operations
            </Card.Text>
            <Button href="/services" variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={IETM} className="icon-ietm" />
          <Card.Body>
            <Card.Title>Project Management</Card.Title>
            <Card.Text>
            Skilled in providing program management.
            </Card.Text>
            <Button href="/services" variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
        </div>
      </div>
    </Container>

    </div>

  )
}

export default About;