import React from 'react';
import './certificate.css'; 

const certificates = [
  {
    title: 'React Certification',
    issuer: 'Infosys',
    date: 'Specify Date', 
    image: 'https://via.placeholder.com/300x200?text=Infosys+React+Cert', 
    link: '#' 
  },
  {
    title: 'C# Certification',
    issuer: 'Infosys',
    date: 'Specify Date', 
    image: 'https://via.placeholder.com/300x200?text=Infosys+Csharp+Cert', 
    link: '#' 
  },
  {
    title: 'React Bootcamp Certificate',
    issuer: 'DevTown',
    date: 'Specify Date', 
    image: 'https://via.placeholder.com/300x200?text=DevTown+React+Bootcamp', 
    link: '#' 
  },
  {
    title: 'Microsoft Certified',
    issuer: 'Microsoft',
    date: 'Specify Date',
    image: 'https://via.placeholder.com/300x200?text=Microsoft+Certificate',
    link: '#' 
  },
];

const Certificate = () => {
  return (
    <section className="certificateSection" id="certificates">
      <h2 className="certificateTitle">My Certificates</h2>
      <p className="certificateSubtitle">Here are some of the certifications I've earned through various platforms.</p>
      <div className="certificateGrid">
        {certificates.map((cert, index) => (
          <div className="certificateCard" key={index}>
            {}
            {cert.image && !cert.image.includes('via.placeholder.com') && cert.image !== '#' ? (
              <img src={cert.image} alt={cert.title} />
            ) : (
              <div className="placeholderImage" style={{width: '300px', height: '200px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#757575', fontSize: '16px', fontWeight: 'bold'}}>
                {cert.title} <br/> (Image not available)
              </div>
            )}
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            {cert.link && cert.link !== '#' ? (
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            ) : (
              <p><em>Link not available</em></p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;