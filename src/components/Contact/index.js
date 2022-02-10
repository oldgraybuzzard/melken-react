import React, {useState } from "react";
import { send } from 'emailjs-com';
import { validateEmail } from '../../utils/helpers';
import { capitalizeFirstLetter } from '../../utils/helpers';
import env from 'react-dotenv';

function Contact() {
    const [pages] = useState([
        {
            name: "contact"
        }
    ]);

    const [currentPage] = useState(pages[0]);

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const [toSend, setToSend ] = useState({
        name: '',
        message: '',
        email: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        send(
             process.env.REACT_APP_SERVICEID,
             process.env.REACT_APP_TEMPLATEID,
             toSend,
             process.env.REACT_APP_USERID
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Thank You for your feedback!');
        })
        .catch((err) => {
            console.log('FAILED...', err);
          });
    }

    
    const handleChange = (e) => {
        
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            setToSend({ ...toSend, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <section style={{backgroundColor: '#FF7F11'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto mb-4" style={{color: '#252422'}}>
                    <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className="light my-4" />
                        <form id="contact-form" onSubmit={handleSubmit} className="mb-5">
                            <div>
                                <label htmlFor="name" style={{fontWeight: 'bold' }}>Name:</label>
                                <input
                                    className="form-control"
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    onBlur={handleChange} required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" style={{fontWeight: 'bold' }}>Email address:</label>
                                <input
                                    className="form-control"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    defaultValue={email}
                                    onBlur={handleChange} required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" style={{fontWeight: 'bold' }}>Message:</label>
                                <textarea
                                    className="form-control"
                                    placeholder="Message"
                                    name="message"
                                    rows="5"
                                    defaultValue={message}
                                    onBlur={handleChange} required
                                />
                            </div>
                            {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}
                            <div className="text-center">
                            <button type="submit" className="btn btn-xl js-scroll-trigger" style={{backgroundColor:'#6699CC' }}>Submit</button>
                            </div>
                        </form>
                    
                        <h4 className="text-center">Or simply send us an <a href="mailto:info@melken-solutions.com?subject=We visited your website and have a question" target="blank"> email!</a></h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;