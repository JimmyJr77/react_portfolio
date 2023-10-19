import React from 'react';
import jimmyPic from '../assets/images/jimmy_pic.jpg';

function AboutMe() {
    return (
        <div className="App text-center">
            <div className="rounded-circle bg-cover" style={{ 
                width: '150px', 
                height: '150px', 
                backgroundImage: `url(${jimmyPic})` 
            }}>
            </div>
            <div className="mt-3 text-white">
                Hello! I'm a passionate AI Solutions Architect with a love for creating scalable and robust solutions. I have extensive experience in deep learning, machine learning, and various other AI technologies. My drive is to see the convergence of human intelligence with artificial intelligence to solve some of the world's most challenging problems.
            </div>
        </div>
    );
}

export default AboutMe;
