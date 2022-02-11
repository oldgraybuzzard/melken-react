import React, {useState} from "react";
import { Carousel, Container, Card, Button } from "react-bootstrap";
import carousel1 from '../../assets/img/info-managment.jpg';
import carousel2 from '../../assets/img/project-management.jpg';
import carousel3 from '../../assets/img/tech-content.jpg';
import carousel4 from '../../assets/img/engineering-support.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardUser, faFilePdf, faGears, faHandshake, faListCheck, faWheelchair, faWrench } from '@fortawesome/free-solid-svg-icons';
import man2 from '../../assets/img/man-2.png';

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
        <div className="about-what-divider"></div>
         <div>
           <h2 className="pb-2 text-center border-bottom">What Do We Do?</h2>
          <img src={man2} className='about-image' alt='excited men' style={{width: '25%'}} />
          </div>
        <div className="container px-4 py-5" id="icon-grid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <FontAwesomeIcon icon={faListCheck} style={{width:"1.75em",height:"1.75em", margin:"1em"}}/>
            <div>
              <h4 className="fw-bold mb-0">Project Management</h4>
              <p>We understand that every organization looks, behaves and performs differently, and we tailor our project management approach accordingly.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <FontAwesomeIcon icon={faBook} style={{width:"1.75em",height:"1.75em", margin:"1em"}}/>
            <div>
              <h4 className="fw-bold mb-0">Interactive Electronic Technical Manuals (IETM)</h4>
              <p> Accurate and readily available technical publications are essential to support safe and efficient operations.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <FontAwesomeIcon icon={faGears} style={{width:"1.75em",height:"1.75em", margin:"1em"}}/>
            <div>
              <h4 className="fw-bold mb-0">Engineering Support</h4>
              <p>Properly designed and maintained training systems are critical to the overall cost of ownership and lifespan, and efficiency of your training device.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <FontAwesomeIcon icon={faWrench} style={{width:"1.75em",height:"1.75em", margin:"1em"}}/>
            <div>
              <h4 className="fw-bold mb-0">Integrated Logistics Support</h4>
              <p>Melken provide our clients with “cradle to grave” lifecycle support.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <FontAwesomeIcon icon={faChalkboardUser} style={{width:"1.75em",height:"1.75em", margin:"1em"}}/>
            <div>
              <h4 className="fw-bold mb-0">Training</h4>
              <p>Training programs are a critical element to obtain the best performance, efficiency and safety from your training devices.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <FontAwesomeIcon icon={faFilePdf} style={{width:"1.75em",height:"1.75em", margin:"1em"}}/>
            <div>
              <h4 className="fw-bold mb-0">Document Conversion</h4>
              <p>We can convert all types of data and images in any format to a wide range of output formats at high quality.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <FontAwesomeIcon icon={faWheelchair} style={{width:"1.75em",height:"1.75em", margin:"1em"}}/>
            <div>
              <h4 className="fw-bold mb-0">508 Accessibility</h4>
              <p>Specializing in accessibility for websites, web and mobile applications, and documents.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
              <FontAwesomeIcon icon={faHandshake} style={{width:"1.75em",height:"1.75em", margin:"1em"}}/>
              <div>
                <h4 className="fw-bold mb-0">Consulting</h4>
                <p>We provide comprehensive services to support your mission by leveraging strategy to drive people, process, information and technology considerations.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>

  )
}

export default About;