import React, { useEffect, useState } from 'react';
import jimmyPic from '../assets/images/jimmy_pic.jpg';
import '../styles/ProfilePic.css';
import '../styles/Contact.css';

function Contact() {
    useEffect(() => {
        const form = document.querySelector('.contact-form');

        const handleSubmit = (event) => {
            if (!event.target.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            event.target.classList.add('was-validated');
        };
        
        if (form) {
            form.addEventListener('submit', handleSubmit);
        
            // Clean up the listener when the component unmounts
            return () => {
                form.removeEventListener('submit', handleSubmit);
            };
        }
    }, []);

    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);
    
    return (
        <div className="App container d-flex flex-column align-items-center vh-100">
            <div className="position-relative">
                <div className="pulse-blue mt-4"></div> 
                <div className="pulse-orange mt-4"></div>
                <div className="rounded-circle bg-cover my-4" style={{ 
                    width: '150px', 
                    height: '150px', 
                    backgroundImage: `url(${jimmyPic})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 1
                }}>
                </div>
            </div>
            <div className="mt-3 text-white">
                Feel free to reach out with any questions or requests for consultation.
                <form className="contact-form mt-2">
                    <div className="mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Name" 
                            required 
                            onBlur={() => setNameTouched(true)}
                        />
                        <div className={nameTouched ? "invalid-feedback d-block" : "invalid-feedback"}>
                            Name is required.
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Email" 
                            required 
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            onBlur={() => setEmailTouched(true)}
                        />
                        <div className={emailTouched ? "invalid-feedback d-block" : "invalid-feedback"}>
                            Please provide a valid email address.
                        </div>
                    </div>

                    <div className="mb-3">
                        <textarea 
                            className="form-control" 
                            id="message" 
                            rows="4" 
                            placeholder="Message" 
                            required
                            onBlur={() => setMessageTouched(true)}
                        ></textarea>
                        <div className={messageTouched ? "invalid-feedback d-block" : "invalid-feedback"}>
                            Message is required.
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
