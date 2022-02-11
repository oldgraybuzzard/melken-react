import React, { useState} from "react";
import { Container, Card, Button, Carousel } from "react-bootstrap";
import nutshell from '../../assets/img/nutshell.jpg';
import man2 from '../../assets/img/man-2.png';
import ietm from '../../assets/icons/ietm.jpg';
import pm from '../../assets/icons/pm.jpg';
import engsupport from '../../assets/icons/eng-support.jpg';
import logsupport from '../../assets/icons/logistics-support.jpg';
import training from '../../assets/icons/training.jpg';

function Services () {
   const [pages] = useState([
    {
      name: 'about us'
    }
  ]);

  const [currentPage] = useState(pages[0]);

  return (
  <div>
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

export default Services;