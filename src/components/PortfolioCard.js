import React, { useState } from 'react';
import {
  Card,
  ProjectImage,
  ProjectInfo,
  ProjectLanguages,
  ProjectLink,
  GitHubLogo,
  Glow,
} from '../styles/PortfolioCardStyles';

// Import the GitHub logo image
import githubLogo from '../assets/images/github_logo.png';

const PortfolioCard = ({ project }) => {
  const { projectName, projectImage, languages, projectLink, githubLink } = project;
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setCursorPos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {isHovered && <Glow style={{ '--x': `${cursorPos.x}%`, '--y': `${cursorPos.y}%` }} />}
      <ProjectImage src={projectImage} alt={projectName} />
      <ProjectInfo>
        <ProjectLanguages>{languages}</ProjectLanguages>
      </ProjectInfo>
      <ProjectLink href={projectLink} target="_blank" rel="noopener noreferrer">
        {projectName}
      </ProjectLink>
      {/* Conditionally render the GitHub logo when hovering */}
      {isHovered && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <GitHubLogo src={githubLogo} alt="GitHub" />
        </a>
      )}
    </Card>
  );
};

export default PortfolioCard;