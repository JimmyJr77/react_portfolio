import React from 'react';
import jimmyPic from '../assets/images/jimmy_pic.jpg';
import '../styles/AboutMeStyles.css';
import '../styles/ProfilePic.css';

function AboutMe() {
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

            <div className="mt-3 text-white text-center">
                Hello! I'm a passionate AI Solutions Architect with a love for creating scalable and robust solutions. I have extensive experience in deep learning, machine learning, and various other AI technologies. My drive is to see the convergence of human intelligence with artificial intelligence to solve some of the world's most challenging problems.
            </div>
        </div>
    );
}

export default AboutMe;

