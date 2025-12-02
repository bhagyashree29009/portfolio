import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import AnimatedSection from "./AnimatedSection";
import logo from "../assets/cit.png";
import vtlogo from "../assets/vtlogo.png";
import "./Styles/hero.css";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}

        <div className="flex justify-center mt-8">
          <div className="bg-gray-200 p-4 rounded-lg flex flex-col sm:flex-row items-center w-full sm:w-11/12 md:w-100 lg:w-100">
            <img
              src={vtlogo} // Replace 'logo.png' with the path to your logo
              alt="Logo"
              className="w-24 h-16 sm:w-30 md:w-40 lg:w-48 mb-4 sm:mb-0 mr-0 sm:mr-4 bg-black"
            />
            <div className="text-center sm:text-left mt-3 mb-6">
              <h2 className="text-lg sm:text-xl text-gray-700 font-bold mb-1 mt-4">
                Vasp Technologies 
              </h2>
              <h2 className="text-lg sm:text-xl text-gray-700 font-bold mb-6">
                Junior Software Devloper 
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-1">
                FullStack Web Developement | React | Laravel(php) | MERN | JavaScript | HTML5 | CSS3 | C/C++ |
              </p>
              {/* <p className="text-sm sm:text-base text-gray-600 mb-1">Member @Astrophysics Club | Member @Entrepreneurship-Cell</p>
      <p className="text-sm sm:text-base text-gray-600 mb-1">Placement Co-ordinator & Web Lead for the Placement season 2023-24</p>
      <p className="text-sm sm:text-base text-gray-600 mb-1">Member of Y20 Summit organizing committee</p>
      <p className="text-sm sm:text-base text-gray-600 mb-1">Member of Techcracy'22(Technical Fest) events committee</p> */}
              <a href="https://www.vasptechnologies.com/" target="_blank" rel="noreferrer">
                <button className="citbutton">Visit Vasp Technologies</button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="bg-gray-200 p-4 rounded-lg flex flex-col sm:flex-row items-center w-full sm:w-11/12 md:w-full lg:w-full">
            <img
              src={logo} // Replace 'logo.png' with the path to your logo
              alt="Logo"
              className="w-24 h-32 sm:w-30 sm:h-40 md:w-40 md:h-48 lg:w-48 lg:h-56 mb-4 sm:mb-0 mr-0 sm:mr-4"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-lg sm:text-xl text-gray-700 font-bold mb-1">
                Central Institute of Technology Kokrajhar
              </h2>
              <h2 className="text-lg sm:text-xl text-gray-700 font-bold mb-6">
                B.Tech in Computer Science & Engineering (2020-2024) CGPA: 7.5
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-1">
                Ex-Co-Ordinator @Coding Club CITK{" "}
              </p>
              {/* <p className="text-sm sm:text-base text-gray-600 mb-1">Member @Astrophysics Club | Member @Entrepreneurship-Cell</p>
      <p className="text-sm sm:text-base text-gray-600 mb-1">Placement Co-ordinator & Web Lead for the Placement season 2023-24</p>
      <p className="text-sm sm:text-base text-gray-600 mb-1">Member of Y20 Summit organizing committee</p>
      <p className="text-sm sm:text-base text-gray-600 mb-1">Member of Techcracy'22(Technical Fest) events committee</p> */}
              <a href="https://www.cit.ac.in/" target="_blank" rel="noreferrer">
                <button className="citbutton">Visit CITK</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
