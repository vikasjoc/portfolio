import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">
                I am a Master's student with a strong foundation in both frontend and backend development. I have hands-on experience in building dynamic web applications using technologies like HTML, CSS, JavaScript, React, and Node.js. I also work with databases like SQL and MongoDB, and have good command over programming languages such as Python, C, C++, and C#. I am constantly learning and improving my skills to become a full-stack developer.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Frontend Development</h2>
                        <p>Skilled in HTML, CSS, JavaScript, and React for creating responsive and interactive user interfaces.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Backend Development</h2>
                        <p>Experience with Node.js and Express.js for building RESTful APIs and server-side logic. Familiar with SQL and MongoDB for database operations.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Programming</h2>
                        <p>Proficient in Python, C, C++, and C# with a clear understanding of data structures, algorithms, and problem-solving concepts.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
