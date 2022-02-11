import React from 'react';
import { Form, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    const icons = [
        {
            name: "fab fa-linkedin fa-lg",
            link: "https://www.linkedin.com/company/melken-solutions-llc"
        },
        {
            name: "fab fa-twitter fa-lg",
            link: "https://twitter.com/melkensolutions"
        }
    ]

    function fullYear() {
    const yearFormat = new Date();
    return yearFormat.getFullYear();
  }

    return (
        // <section>
        //     <div className="container">
        //         <div className='row'>
        //             <div className='col-3'>
        //                 <span> &copy; {fullYear()} Melken Solutions, LLC</span>
        //             </div>
        //             <div className="col-6 text-center">
        //                 <span>Created with ❤️ and ✊ for all by {' '} <a target='blank' href="https://github.com/oldgraybuzzard">OldGrayBuzzard!</a>
        //                 </span>
        //             </div>
        //             <div className='col-3 justify-content'>
        //                   {icons.map(icon =>
        //                       (
        //                           <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name} style={{color: '#FF7F11'}}></i>{' '}</a>
        //                       )
        //                   )}                         
        //             </div>               
        //         </div>
        //     </div>
        //     <div className='container border-top'>
        //         <div className='row'>
        //             <div className='col-3 justify-content'>
        //                 <p>810 Eyrie Drive, Oviedo, FL 32765</p>
        //             </div>
        //             <div className='col-6 text-center justify-content'>
        //                 <p>Office: 407-977-8673 Fax: 407-977-5818</p>
        //             </div>
        //             <div className='col-3 justify-content'>
        //                 <div>
        //                 <a href="mailto:info@melken-solutions.com?subject=We visited your website and have a question" target="blank">
        //                     <FontAwesomeIcon icon={faEnvelope} style={{width:"1.75em",height:"1.75em", margin:"0.5em"}}/>
        //                     </a> 
        //                 </div>
                        
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <div className="container" style={{backgroundColor: '#6699CC'}}>
            <footer className="py-5">
                <div className="row">
                    <div className="col-2">
                        <h5>Contact Us</h5>
                            <ul className="nav flex-column">
                                <li className="mb-2"><p>810 Eyrie Drive</p></li>
                                <li className="mb-2"><p>Oviedo, FL 32765</p></li>
                                <li className="mb-2"><p>407-977-5673</p></li>
                                <li className="mb-2"><a href="mailto:info@melken-solutions.com?subject=We visited your website and have a question" target="blank">
                                    <FontAwesomeIcon icon={faEnvelope} style={{width:"1.75em",height:"1.75em", margin:"0.5em"}}/></a></li>
                            </ul>
                    </div>
                    <div className="col-2">
                        <h5>Services</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" >Project Management</a></li>
                                <li className="nav-item mb-2"><a href="#" >Technical Documentation</a></li>
                                <li className="nav-item mb-2"><a href="#" >Training</a></li>
                                <li className="nav-item mb-2"><a href="#" >Consulting</a></li>
                                <li className="nav-item mb-2"><a href="#" >Logistics Support</a></li>
                            </ul>
                    </div>

                    <div className="col-2">
                        <h5>Government</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#">Capability Statement</a></li>
                                <li className="nav-item mb-2"><a href="#">GSA Catalog</a></li>
                                {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li> */}
                            </ul>
                    </div>

                    <div className="col-5">
                        <Form>
                            <h5>Send Us A Message</h5>
                            <Form.Group className="mb-3" controlId="Form.ControlInput">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Form.ControlTextarea">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button style={{backgroundColor: '#FF7F11', color: 'white'}}>Send It</Button>
                        </Form>
                    </div>
                </div>

                <div className="d-flex justify-content-between py-4 my-4 border-top">
                <p>
                    <span> &copy; {fullYear()} Melken Solutions, LLC</span> All rights reserved
                </p>
                <p>
                    <span>Created with ❤️ and ✊ for all by {' '} <a target='blank' href="https://github.com/oldgraybuzzard">OldGrayBuzzard!</a></span>
                </p>
                <ul className="list-unstyled d-flex">
                    {icons.map(icon =>
                              (
                                  <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name} style={{color: '#FF7F11'}}></i>{' '}</a>
                              )
                          )
                    }
                </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
