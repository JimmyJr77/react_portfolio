
import jimmyPic from '../assets/images/jimmy_pic.jpg';
import { PulseOrange, PulseBlue } from '../styles/ProfilePicStyles';
import { TextContainer } from '../styles/AboutMeStyles';

function AboutMe() {
    return (
            <div className="App container d-flex flex-column align-items-center vh-100">
                <div className="position-relative">
                    <PulseBlue className="mt-4" /> 
                    <PulseOrange className="mt-4" />
                    <div className="rounded-circle bg-cover my-4" style={{ 
                        width: '150px', 
                        height: '150px', 
                        backgroundImage: `url(${jimmyPic})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 1
                    }} />
                </div>
                <TextContainer>
                    Hello! I'm a passionate AI Solutions Architect with a love for creating scalable and robust software solutions. I have extensive experience in natural language processing, machine learning, and various other AI technologies. My drive is to see the convergence of human intelligence with artificial intelligence to solve some of the world's most challenging problems.
                </TextContainer>
            </div>
    );
}

export default AboutMe;