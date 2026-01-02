import React from 'react';
import './works.css';

const works = () => {
  return (
    <section id="projects" className="projectsSection">
      <h2 className="sectionTitle">My Portfolio</h2>
      <p className="sectionSubtitle">
        I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.
        I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
      </p>

      <div className="projectsGrid">
        <div className="projectCard">
          <h3>CafeEase – Java POS</h3>
          <p>A Java-based cafe billing & management desktop app.</p>
        </div>
        <div className="projectCard">
          <h3>Netflix UI Clone</h3>
          <p>Front-end Netflix landing page clone with Bootstrap.</p>
        </div>
        <div className="projectCard">
          <h3>Smart Distribution</h3>
          <p>Track and manage logistics efficiently with data flow.</p>
        </div>
        <div className="projectCard">
          <h3>Visual GPS Navigator</h3>
          <p>Dijkstra-powered route visualizer using Python Tkinter.</p>
        </div>
        <div className="projectCard">
          <h3>IndiaEdu Ranker</h3>
          <p>Ranks top Indian schools using multiple comparison metrics.</p>
        </div>
      </div>
    </section>
  );
};

export default works;
