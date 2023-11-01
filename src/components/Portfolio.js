import React from 'react';
import PortfolioCard from './PortfolioCard';
import { PortfolioWrapper } from '../styles/PortfolioStyles';

import jsquiz from '../assets/images/javascript_quiz.png';
import libelNews from '../assets/images/libel.png';
import logoGenerator from '../assets/images/logo_generator.png';
import employeeTracker from '../assets/images/employee_tracker.png';
import weatherForecaster from '../assets/images/weather_forecaster.png';
import rateItProductReviews from '../assets/images/rateit_rating_tool.png';
import eComBackEnd from '../assets/images/ecommerce_backend.png';
import trashTalkBlog from '../assets/images/trashtalk_blog.png';
import socialNetworkDB from '../assets/images/social_network_db.png';
import trileosClothingStore from '../assets/images/trileos_cart.png';

const portfolioData = [
    {
        id: 1,
        projectName: 'JavaScript Quiz',
        projectImage: jsquiz,
        languages: 'JS, CSS, HTML',
        projectLink: 'https://jimmyjr77.github.io/JavaScript-Quiz/',
        githubLink: 'https://github.com/JimmyJr77/JavaScript-Quiz'
    },
    {
        id: 2,
        projectName: 'Libel News API',
        projectImage: libelNews,
        languages: 'HTML, JS, CSS, APIs',
        projectLink: 'https://rhonvyramos.github.io/libel_news_reports/',
        githubLink: 'https://github.com/JimmyJr77/libel'
    },
    {
        id: 3,
        projectName: 'Logo Generator',
        projectImage: logoGenerator,
        languages: 'JS, Inquirer, Classes',
        projectLink: 'https://drive.google.com/file/d/1MOux1fntETVqdj3-nFhjplAMVxia9Gjm/view',
        githubLink: 'https://github.com/JimmyJr77/logo-generator'
    },
    {
        id: 4,
        projectName: 'Employee Tracker',
        projectImage: employeeTracker,
        languages: 'JS, Express, Node',
        projectLink: 'https://drive.google.com/file/d/1fTGKFns4EIoMkdz8mXcEcXuX-J-oKXpL/view',
        githubLink: 'https://github.com/JimmyJr77/employee_tracker'
    },
    {
        id: 5,
        projectName: 'Weather Forecaster',
        projectImage: weatherForecaster,
        languages: 'HTML, JS, CSS, APIs',
        projectLink: 'https://jimmyjr77.github.io/weather_forcaster/',
        githubLink: 'https://github.com/JimmyJr77/weather_forcaster'
    },
    {
        id: 6,
        projectName: 'RateIt Product Reviews',
        projectImage: rateItProductReviews,
        languages: 'HTML, JS, CSS, Bootstrap, JQuery UI, Node, Sequelize, Handlbars',
        projectLink: 'https://rateit-e0014fad4ba9.herokuapp.com/',
        githubLink: 'https://github.com/JimmyJr77/rateit'
    },
    {
        id: 7,
        projectName: 'E-Commerce Back-end',
        projectImage: eComBackEnd,
        languages: 'JavaScript, Express, Node, Sequelize',
        projectLink: 'https://drive.google.com/file/d/1-LwKzfg_fWVR44r-MxqiJ1zpgGjk4mPp/view',
        githubLink: 'https://github.com/JimmyJr77/e-commerce_backend'
    },
    {
        id: 8,
        projectName: 'TrashTalk Blog',
        projectImage: trashTalkBlog,
        languages: 'JS, Bootstrap, Handlebars',
        projectLink: 'https://trashtalk-recycler-4f184b751d0b.herokuapp.com/',
        githubLink: 'https://github.com/JimmyJr77/trashtalk'
    },
    {
        id: 9,
        projectName: 'Social Network Database',
        projectImage: socialNetworkDB,
        languages: 'JavaScript, MongoDB',
        projectLink: 'https://drive.google.com/file/d/1-LwKzfg_fWVR44r-MxqiJ1zpgGjk4mPp/view',
        githubLink: 'https://github.com/JimmyJr77/Social-Network'
    },
    {
        id: 10,
        projectName: 'Trileos Clothing Store',
        projectImage: trileosClothingStore,
        languages: 'MERN, Stripe (eCommerce) connected',
        projectLink: 'https://trileos-a2f4c74c92f2.herokuapp.com/',
        githubLink: 'https://github.com/JimmyJr77/trileos'
    },
];

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      {portfolioData.map((project) => (
        <PortfolioCard key={project.id} project={project} />
      ))}
    </PortfolioWrapper>
  );
};

export default Portfolio;
