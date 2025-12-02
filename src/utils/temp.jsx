import React from 'react';
import Navbar from './Navbar';
import '../components/Styles/achievement.css';
import AnimatedSection from './AnimatedSection';

import i1 from "../assets/Certificate/i1.png";
import i2 from "../assets/Certificate/i2.png";
import i3 from "../assets/Certificate/i3.png";
import i4 from "../assets/Certificate/i4.png";
import i5 from "../assets/Certificate/i5.png";
import i6 from "../assets/Certificate/i6.png";
import i7 from "../assets/Certificate/i7.png";
import i8 from "../assets/Certificate/i8.png";
import i9 from "../assets/Certificate/i9.png";
import i10 from "../assets/Certificate/i10.png";
import i11 from "../assets/Certificate/i11.png";
import i12 from "../assets/Certificate/i12.png";
import i13 from "../assets/Certificate/i13.png";
import i14 from "../assets/Certificate/i14.jpg";
import i15 from "../assets/Certificate/i15.png";
import i16 from "../assets/Certificate/i16.jpg";
import i17 from "../assets/Certificate/i17.png";

const Achievement = () => {

  const courses = [
    { id: 1, imageSrc: i2, link: "https://www.udemy.com/certificate/UC-6bda9fe4-5f23-43ef-a77c-926c7c41e31c/"},
    { id: 2, imageSrc: i3, link: "https://www.udemy.com/certificate/UC-119dccd2-43df-4612-904d-0194da1140f8/" },
    { id: 3, imageSrc: i4, link: "https://www.udemy.com/certificate/UC-302ae623-d91e-42aa-9827-2c1961e32af3/" },
    { id: 4, imageSrc: i5, link: "https://www.linkedin.com/learning/certificates/bb779f03693e3a9a08eb1caaec17791c6ca5ea48e36d4dde987ef76522a98fe3" },
    { id: 5, imageSrc: i15, link: "https://www.hackerrank.com/certificates/15841a0c72bb" },
    { id: 6, imageSrc: i16, link: "https://www.udemy.com/certificate/UC-4959e5ca-71bb-4e14-bcbf-a3e9551319f8/" },
  ];

  const internship = [
    { id: 1, imageSrc: i1},
    { id: 2, imageSrc: i8},
    { id: 3, imageSrc: i14},
    { id: 4, imageSrc: i11},
    { id: 5, imageSrc: i6},
    { id: 6, imageSrc: i13},
  ];

  const Competitions = [
    { id: 1, imageSrc: i7},
    { id: 2, imageSrc: i9},
    { id: 3, imageSrc: i10},
    { id: 4, imageSrc: i12},
  ];

  return (
    <>
    <Navbar />

    <div className="achievement-section">

       <AnimatedSection
        sectionId="certifications-section"
        heading="Courses"
        paragraph="These are few online courses that I have completed on various platforms like Udemy and Linkedin learning"
        />
        
      <div className="certifications">
        {courses.map((courses) => (
          <div className="certificate-box" key={courses.id}>
            <img src={courses.imageSrc} alt={`Certificate ${courses.id}`} className="certificate-image" />
            <a href={courses.link} target="_blank" rel="noopener noreferrer" className="learn-more-button">Verify</a>
          </div>
        ))}
      </div>
    </div>

    <div className="achievement-section">

      <AnimatedSection
      sectionId="internship-section"
      heading="Internship | Volunteering"
      paragraph="These are the certificates of the Internship I have done also the certifactions of Volunteering experience"
      />
      
      <div className="certifications">
      {internship.map((internship) => (
        <div className="certificate-box" key={internship.id}>
          <img src={internship.imageSrc} alt={`Certificate ${internship.id}`} className="certificate-image2" />
        </div>
      ))}
      </div>
      </div>

    <div className="achievement-section">
    <AnimatedSection
    sectionId="competitions-section"
    heading="Competitions"
    paragraph="Few Certificates of different coding competitions, challanges and events are here"
    />

    <div className="certifications1">
    {Competitions.map((Competitions) => (
      <div className="certificate-box1" key={Competitions.id}>
        <img src={Competitions.imageSrc} alt={`Certificate ${Competitions.id}`} className="certificate-image1" />
      </div>
    ))}
    </div>
    </div>

    <div className="achievement-section">
      <AnimatedSection
      sectionId="other-section"
      heading="Other Achievements"
      />
    <div class="attractive-box">
    <div class="box-content">
    <ul>
    <li><AnimatedSection
      sectionId="p1"
      paragraph="Secured Rank 1 among 1000+ participants in Code-e-Jung Coding competition organized by Celebal Technologies on HackerRank"
      /></li>
      <li><AnimatedSection
      sectionId="p1"
      paragraph="Selected for the Mi Scholarship for Undergraduate Degree Courses 2020-21 Among 499 winners from thousands of application"
      /></li>
      <li><AnimatedSection
      sectionId="p1"
      paragraph="Achieved Peoficient Tag on GeeksforGeeks by writing 16+ great viewed Articles"
      /></li>
            <li><AnimatedSection
      sectionId="p1"
      paragraph="Solved about 500+ Problems on Data Structures and Algorithms on various coding platforms including Leetcode, GfG etc"
      /></li>
            <li><AnimatedSection
      sectionId="p1"
      paragraph="Selected as one of the few recipients of the Next Generation Tech Booster Challenge Program of Udacity"
      /></li>
    </ul>
    </div>
    </div>

    <div className='extraImageDiv'>
       <div className='imageDiv'>
          <img src={i17} className='pic'></img>
       </div>
    </div>

    </div>

    </>
  );
};

export default Achievement;