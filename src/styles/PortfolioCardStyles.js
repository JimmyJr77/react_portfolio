import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectInfo = styled.div`
  padding: 15px;
  flex: 1;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

export const ProjectLanguages = styled.p`
  font-size: 0.9em;
  color: #555;
  margin-bottom: 15px;
`;

export const ProjectLink = styled.a`
  display: block;
  padding: 10px 0;
  width: 100%;
  background-color: #007BFF;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 0 0 8px 8px;
  font-size: 0.9em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF4E00;
  }
`;

export const GitHubLogo = styled.img`
  position: absolute;
  top: 10px; /* Adjust the top position as needed */
  right: 10px; /* Adjust the right position as needed */
  width: 60px; /* Adjust the width of the GitHub logo */
  height: 60px; /* Adjust the height of the GitHub logo */
  opacity: 0.7; /* Adjust the opacity of the GitHub logo */
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1; /* Increase opacity when hovering */
  }
`;

export const Glow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at var(--x) var(--y), rgba(255, 165, 0, 0.4), transparent);
  pointer-events: none;
  transition: background 0.3s;
`;

