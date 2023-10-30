import React from 'react';
import ProfilePic from '../components/ProfilePic'

function AboutMe() {
    return (
        <div className="App container d-flex flex-column align-items-center vh-100">
            <ProfilePic />

            <div className="mt-3 text-white text-center">
                Hello! I'm a passionate AI Solutions Architect with a love for creating scalable and robust software solutions. I have extensive experience in natural language processing, machine learning, and various other AI technologies. My drive is to see the convergence of human intelligence with artificial intelligence to solve some of the world's most challenging problems.
            </div>
        </div>
    );
}

export default AboutMe;
