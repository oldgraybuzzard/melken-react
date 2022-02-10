import React, {useState} from "react";
import { Carousel, Container, Card, Button } from "react-bootstrap";
import carousel1 from '../../assets/img/info-managment.jpg';
import carousel2 from '../../assets/img/project-management.jpg';
import carousel3 from '../../assets/img/tech-content.jpg';
import carousel4 from '../../assets/img/engineering-support.jpg';
import man2 from '../../assets/img/man-2.png';
import ietm from '../../assets/icons/ietm.jpg';
import pm from '../../assets/icons/pm.jpg';
import engsupport from '../../assets/icons/eng-support.jpg';
import logsupport from '../../assets/icons/logistics-support.jpg';
import training from '../../assets/icons/training.jpg';

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
      <div className="row">
        <h2 className="text-center"> What Do We Do?</h2>
      </div>
      
      <div>
        <img src={man2} className='about-image' alt='excited men' style={{width: '25%'}} />
      </div>
      <div className="container">
        <div className="row">
        <Card style={{ width: '18rem', margin: 5 }}>
          <Card.Img variant="top" src={pm} className="card-icon" style={{width: '25%'}} />
          <Card.Body>
            <Card.Title>Project Management</Card.Title>
            <Card.Text>
            Skilled in providing program management.
            </Card.Text>
            <Button href="/services" variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: 5 }}>
          <Card.Img variant="top" src={ietm} className="card-icon" style={{width: '25%' }}/>
            <Card.Body>
            <Card.Title>Interactive Electronic Technical Manuals (IETM)</Card.Title>
            <Card.Text>
            Accurate and readily available technical publications are essential to support safe and efficient operations
            </Card.Text>
            <Button href="/services" variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: 5 }}>
          <Card.Img variant="top" src={engsupport} className="card-icon" style={{width: '25%'}} />
          <Card.Body>
            <Card.Title>Engineering Support</Card.Title>
            <Card.Text>
            Properly designed and maintained training systems are critical to the overall cost of ownership and lifespan, and efficiency of your training device.
            </Card.Text>
            <Button href="/services" variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: 5 }}>
          <Card.Img variant="top" src={logsupport} className="card-icon" style={{width: '25%'}} />
          <Card.Body>
            <Card.Title>Integrated Logistics Support</Card.Title>
            <Card.Text>
            Melken provide our clients with “cradle to grave” lifecycle support.
            </Card.Text>
            <Button href="/services" variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', margin: 5 }}>
          <Card.Img variant="top" src={training} className="card-icon" style={{width: '25%'}} />
          <Card.Body>
            <Card.Title>Training</Card.Title>
            <Card.Text>
            Training programs are a critical element to obtain the best performance, efficiency and safety from your training devices.
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