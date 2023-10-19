import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
    return (
        <div className="container mt-5 vh-100 d-flex align-items-center justify-content-center">
            <div className="w-100">
                <header className="text-center mb-5">
                    <h1>JAMES P. O’BRIEN JR., MBA</h1>
                    <p>
                        <a href="tel:6198385897">619.838.5897</a> | 
                        <a href="mailto:jimmyjr.obrien@gmail.com"> jimmyjr.obrien@gmail.com</a> | 
                        <a href="www.linkedin.com/in/jimmyjrobrien/" target="_blank" rel="noreferrer">www.linkedin.com/in/jimmyjrobrien/</a>
                    </p>
                    <p>TS/SCI with CI Polygraph</p>
                </header>

                <h2 className="text-center mb-5">AI Solutions Architect</h2>

                <div className="accordion" id="resumeAccordion">
                    {/* Skills section */}
                    <div className="accordion-item">
                        <h3 className="accordion-header" id="headingSkills">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSkills" aria-expanded="false" aria-controls="collapseSkills">
                                Skills
                            </button>
                        </h3>
                        <div id="collapseSkills" className="accordion-collapse collapse" aria-labelledby="headingSkills" data-bs-parent="#resumeAccordion">
                            <div className="accordion-body">
                                {/* List of skills */}
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
                            <div className="accordion-body">
                                {/* Add job details here */}
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
                            <div className="accordion-body">
                                {/* Add educational details here */}
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
                            <div className="accordion-body">
                                {/* Add technical details here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
