import React from 'react';
import '../App.css';
import jimmyPic from '../assets/images/jimmy_pic.jpg';
import '../styles/ProfilePic.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
    BlankDiv
  } from '../styles/ResumeStyles';


function Resume() {
    return (
        <div className="App container d-flex flex-column align-items-center">
            <div className="position-relative mt-4">
                <div className="pulse-blue"></div> 
                <div className="pulse-orange"></div>
                <div className="rounded-circle bg-cover" style={{ 
                    width: '150px', 
                    height: '150px', 
                    backgroundImage: `url(${jimmyPic})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 1
                }}>
                </div>
            </div>

            <div className="w-100 mt-4">
                <header className="text-center mb-4">
                    <h2 className="orange">JAMES P. O’BRIEN JR., MBA</h2>
                    <p>
                        <a href="tel:6198385897">619.838.5897</a> | { }
                        <a href="mailto:jimmyjr.obrien@gmail.com"> jimmyjr.obrien@gmail.com</a> | { }
                        <a href="www.linkedin.com/in/jimmyjrobrien/" target="_blank" rel="noreferrer">www.linkedin.com/in/jimmyjrobrien/</a> |
                        <ResumeDownload/>
                    </p>
                    <p>TS/SCI with CI Polygraph</p>
                    <hr style={{ border: "none", height: "1px", backgroundColor: "grey" }} />
                </header>
                <h2 className="text-center mb-3">AI Solutions Architect</h2>
                <p className='text-center'>
                    Former Marine Corps intelligence officer and entrepreneur rooted in data analytics, team building, and project management. 15+ years of experience planning and executing large, time sensitive projects. 25+ years of intimate work within and for DoD, cyber, and military intelligence communities. 7 years leading product development and sales. Put to market 20 products and was featured on Shark Tank. 4+ years leading AI/ML solutioning and software dev teams. Educated in business management with a breadth of experience. Creative and logical with strong EQ and leadership.
                </p>

                <div className="accordion mb-5" id="resumeAccordion">
                    {/* Skills section */}
                    <div className="accordion-item">
                        <h3 className="accordion-header" id="headingSkills">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSkills" aria-expanded="false" aria-controls="collapseSkills">
                                Skills
                            </button>
                        </h3>
                        <div id="collapseSkills" className="accordion-collapse collapse" aria-labelledby="headingSkills" data-bs-parent="#resumeAccordion">
                            <div className="accordion-body">
                                <ul className="list-unstyled dark-grey">
                                    <li>Agile Planning</li>
                                    <li>Data Analytics</li>
                                    <li>AI/Machine Learning</li>
                                    <li>Software Development</li>
                                    <li>Strategy | Planning</li>
                                    <li>Budget | Accounting</li>
                                    <li>Sales | Marketing</li>
                                    <li>Product Development</li>
                                    <li>Graphic Design</li>
                                    <li>Communications</li>
                                    <li>Executive Briefing</li>
                                    <li>Military Intelligence</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Experience section */}
                    <div className="accordion-item">
                        <h3 className="accordion-header" id="headingExperience">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExperience" aria-expanded="false" aria-controls="collapseExperience">
                                Professional Experience
                            </button>
                        </h3>
                        <div id="collapseExperience" className="accordion-collapse collapse" aria-labelledby="headingExperience" data-bs-parent="#resumeAccordion">
                            <div className="accordion-body dark-grey">
                                
                                <span className='black'><strong>Booz Allen Hamilton (Jan 2020 – Present)</strong></span><br />
                                <span className='orange'><strong>Artificial Intelligence Solutions Architect / Project Manager</strong></span><br />
                                Currently supporting multiple machine learning / software development projects across markets within the DoD. Served as data science team lead, client lead, scrum master, product owner, and project manager. Responsible for client interface, AI solution engineering, and software development. Handles staffing/hiring, team administration, and oversees team development. Supports lead generation, sales and proposals, prototyping, and production.
                                <ul>
                                    <li>Reinvigorated client buy-in through a creative alignment of team capabilities and client requirements. Created new value that has become the focal point for the project. Client now promotes the product externally.</li>
                                    <li>Self-networked through the firm to identify projects that mutually support each other to maximize efficiencies through cross-team communication and support. Recognized for impact.</li>
                                </ul>
                                
                                <span className='black'><strong>United States Marine Corps (1996 – 2019)</strong></span><br />
                                <span className='orange'><strong>Assistant Professor of Planning & Analytics | National Intelligence University, D.C. | 2016 – Present</strong></span><br />
                                Developed curriculum, delivered lectures on project & operations planning, data analytics, problem framing, resource management, risk assessment, and SWOT analysis for the College of Strategic Intelligence.
                                <ul>
                                    <li>Managed instruction, planning, and analytical support to the largest Marine Corps Planning Exercise.</li>
                                    <li>Supported 2 accreditation processes through strict curriculum program management.</li>
                                    <li>Responsible for directing qualitative and quantitative research. Served as a thesis committee member for thesis papers up to 450 pages in length, across a range of topics.</li>
                                </ul>

                                <span className='orange'><strong>Operations Planner | 1st Marine Expeditionary Force, CA | 2015 – 2016</strong></span><br />
                                Managed projects through the training, planning, and execution stages for all analytical related support activities and operations at the highest echelon of Marine Corps command.
                                <ul>
                                    <li>Ensured departments met timelines, budgets, and goals throughout a 12-month exercise planning cycle, culminating in the Marine Corps’ largest full-scale, 10,000+ person real world simulation event.</li>
                                    <li>Led all analytical planning efforts and responsible for the direction of over 250 analysts across multiple departments. Produced SWOT analysis, business intelligence, and operations management products.</li>
                                    <li>Established a doctrine to maximize efficiencies for department operations and to direct information technologies, communications, personnel, equipment, and operations management.</li>
                                </ul>

                                <span className='orange'><strong>Director of Operations and Analysis | 1st Marine Raiders Battalion, CA | 2013 – 2015</strong></span><br />
                                Oversaw the intelligence operations and analytics during combat operations. Led training, personnel & equipment relocation, intelligence operations, and maintained accountability for all personnel and systems.
                                <ul>
                                    <li>Developed and implemented a flawless and time critical retrograde plan for $3.5MM worth of gear, spread-loaded across multiple off-site teams. Bookkeeping became the standard for the organization.</li>
                                    <li>Integrated 4 separate intelligence departments and collaborated with external agencies, multinational partners, and adjacent teams in the creation of 5,000 time-critical analytical reports.</li>
                                    <li>Conducted over 100 executive briefs, regularly updating and advising executives and staffs of local and external departments to help inform, persuade, and share strategic vision.</li>
                                </ul>

                                <span className='orange'><strong>Social Scientist & South Asian Foreign Area Consultant | Human Terrain, Afghanistan | 2012 – 2013</strong></span><br />
                                Developed research designs and conducted quantitative and qualitative research through interviews in hostile environments to provide informational and predictive analysis and to advise commanders of 2nd & 3rd order effects.

                                <p>Other Marine Corps Positions: Foreign Area Officer Pipeline 2009-2012; Aide de Camp, Protocol Officer, Staff Secretary 2008-2009; Analysis Section Head & Weapons and Tactics Instructor 2006-2008; ROTC and Intelligence Officer Training Pipeline 2000-2006; Artilleryman, Section Chief, Platoon Sergeant 1996-2000.</p>

                                <span className='black'><strong>RuckPack, Inc. (2010 – 2017)</strong></span><br />
                                <span className='orange'><strong>CEO / Director of Product Development & Project Manager</strong></span><br />
                                Worked project and operations management and product development, to include all legal compliance, risk mitigation, sourcing, logistics, cost analysis, market analysis, design, packaging, budgets and accounts.
                                <ul>
                                    <li>Managed production runs of up to $2MM value, handling all budgeting and logistical considerations.</li>
                                    <li>Introduced 20 new products to market in only 2 years, accountable for the entire chain of development.</li>
                                    <li>Raised over $500,000 in capital investments based on vision, performance, plan, and presentation.</li>
                                    <li>Created new avenues of income boosting alternative sales by 329%.</li>
                                </ul>

                            </div>
                        </div>
                    </div>


                    {/* Education and Certifications section */}
                    <div className="accordion-item">
                        <h3 className="accordion-header" id="headingEducation">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEducation" aria-expanded="false" aria-controls="collapseEducation">
                                Education & Certifications
                            </button>
                        </h3>
                        <div id="collapseEducation" className="accordion-collapse collapse" aria-labelledby="headingEducation" data-bs-parent="#resumeAccordion">
                            <div className="accordion-body dark-grey">
                            <span className='black'><strong>Formal Education</strong></span>
                                <ul>
                                    <li>MBA | University of Maryland</li>
                                    <li>M.A. South Asian Security Studies | Naval Postgraduate School</li>
                                    <li>B.A. Russian | University of Florida</li>
                                    <li>B.A. Political Science | University of Florida</li>
                                </ul>

                                <span className='black'><strong>Certifications</strong></span>
                                <ul>
                                    <li>Full-Stack Developer Boot Camp | George Washington University</li>
                                    <li>AWS Machine Learning Ops | Data Society</li>
                                    <li>MS Azure Certified Data Scientist Associate | Microsoft DP-100</li>
                                    <li>Data Science Certificate | General Assembly</li>
                                    <li>Red Team Certificate (Problem Framing) | Marine Corps University</li>
                                    <li>PMP Course Certificate | Syracuse University (IVMF Program, Non-PMI Certificate)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Technical Background and Training */}
                    <div className="accordion-item">
                        <h3 className="accordion-header" id="headingTechnical">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTechnical" aria-expanded="false" aria-controls="collapseTechnical">
                                Technical Background, Experience, & Formal Training
                            </button>
                        </h3>
                        <div id="collapseTechnical" className="accordion-collapse collapse" aria-labelledby="headingTechnical" data-bs-parent="#resumeAccordion">
                            <div className="accordion-body dark-grey">
                                <span className='black'><strong>Analytics & Coding</strong></span>
                                <p>
                                    Python, JavaScript, CSS, HTML, Handlebars, MongoDB, Express, React, Node, AWS SageMaker, MS Azure, 
                                    Advanced Excel Tools (Data Modeling, StatTools, Solver, @Risk, Precision Tree, Pivot Tables), Analytical Tradecraft Tools. 
                                    Academic Research & Writing.
                                </p>
                                <span className='black'><strong>Military & Intelligence</strong></span>
                                <p>
                                    Joint Preparation of the Operating Environment (JIPOE / IPB). Intelligence Surveillance & Reconnaissance (ISR) Enterprise Management.
                                    Collections Management & Targeting. SIGINT/HUMINT/IMINT Tasking. Cyber Operations. Theater Security Cooperation and Engagement operations and support.
                                </p>
                                <span className='black'><strong>Productivity & Workflow</strong></span>
                                <p>
                                    Excel, PowerPoint, Adobe Illustrator, QuickBooks, Asana, Trello, Jira, HubSpot.
                                </p>
                                <span className='black'><strong>Other</strong></span>
                                <p>
                                    Command Briefer for General Officers and unit commanders, 2-Star General Aide de Camp. Taught JPME I. Supported Cyber Operations. Supported Special Operations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <BlankDiv />
                </div>
            </div>
        </div>
    );
}



function ResumeDownload() {
    return (
        <div className="resume-download">
            {/* Downloadable Resume Link */}
            <a href="/jpo_resume.pdf" download="jpo_resume.pdf" className="resume-download-link">
                Download My Resume
            </a>
        </div>
    );
}

export default Resume;
