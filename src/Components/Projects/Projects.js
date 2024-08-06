
import "./Projects.css";
import "../GlobalCSS/BaseFloor.css";

import ContentBoxx from '../ContentBox1/ContentBox';
import ContactUs from "../Contact_Us/ContactUs";

import FillerImage from "../FillerImage/FillerImage";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";


import { Cansat, SaCup } from '../Projects/ProjectsImages';


import Cansatmain from "../Resources/Projects_Cansat.jpeg";

import SACupmain from "../Resources/2022/Indep22_1.jpg";


import ProjectsContact1 from "../Resources/Projects_Contact1.jpeg";
import ProjectsContact2 from "../Resources/Projects_Contact2.jpeg";

function Projects(props) {
  const cntntsize = "1.25vmax";

  const scrollToCANSAT = useRef();
  const scrollToSACup = useRef();

  const ExpandPictures = (controls, scrollId) => {
    if (
      document.getElementById(controls).className ==
      "WholePage openExtendedGallery"
    ) {
      scrollToCANSAT.current.scrollIntoView();
      document.getElementById(controls).className =
        "WholePage closeExtendedGallery";
      setTimeout(() => {
        document.getElementById(controls).style.display = "none";
      }, 300);
    } else {
      document.getElementById(controls).className =
        "WholePage openExtendedGallery";
      document.getElementById(controls).style.display = "block";
      scrollId.current.scrollIntoView();
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="ProjectsBody">
      {/* <div className="ProjectsWrapper"> */}
      <div className="PageWrapper">
        <div
          //className="WholePage"
          id="TitleContainer"
          //style={{ height: "100vh" }}
        >
          <h1
            data-aos="fade-in"
            id="TitleText"
            style={{ marginBlock: "auto", color: props.color }}
          >
            SCHEDULE
          </h1>
        </div>

        {/* <div className="ProjectsWholePage" style={{ paddingTop: '10vh', paddingLeft: '6vw', paddingRight: '6vw' }}>
          <div data-aos="fade-right">
            <ContentBoxx
              giveid="cansat"
              heading="CANSAT"
              detailsId="cansatdetails"
              activeimg={Cansatmain}
              activealt="ex1"
              carouselItemsImages={Cansat}
              text="The American Astronautical Society (AAS) organizes the CanSat competition, which is recognized by NASA Goddard. A CanSat is a simulation of a satellite prototype in the shape of a canister that is used to teach students about key space industry knowledge and skills. The CanSat competition is held in Virginia Tech, and each year a new mission statement is created for the students."
              seemoretext="See More"
              detailsHeading="DETAILS"
              detailsText="After being selected through the difficult preliminary stages, the top 40 university teams from around the world compete, design, and launch their CanSat prototypes. For CanSat’22 Team Sammard placed 7th worldwide while in competition with other veteran teams. While developing our SRAD material, we are preparing to participate in CanSat’23."
              color="blue"
            />
          </div>
        </div>


        <div className="ProjectsWholePage" style={{ paddingTop: '10vh', paddingLeft: '6vw', paddingRight: '6vw' }}>
          <div data-aos="fade-right">
            <ContentBoxx
              giveid="sacup"
              heading="SA CUP"
              detailsId="sacupdetails"
              activeimg={SACupmain}
              activealt="ex1"
              carouselItemsImages={SaCup}
              text="ESRA hosts the Spaceport America Cup (SA Cup) for student rocketry teams from around the world. Competing teams are challenged to design a sounding rocket that can reach altitudes upto 30,000 feet above the ground, carrying a payload of mass over 4 kg (8.8 lbs). Multistage rockets and all chemical propulsion types (solid, liquid, and hybrid) are allowed."
              seemoretext="See More"
              detailsHeading="DETAILS"
              detailsText="Over 1,700 students and faculty will gather in Southern New Mexico for the annual Spaceport America Cup. Drawn by the opportunity to collaborate and compete at a world-class spaceport facility, they represent the best and brightest from more than 200 institutions worldwide. It is a humbling experience for the team members to come together to build something so magnificent. At our first attempt at the Spaceport America Cup, we achieved the 23rd rank worldwide in the 10k COTS (Commercial Off the Shelf) category – one of the six categories of rockets in the competition."
              color="blue"
            />
          </div>
        </div>
        <div className='ProjectsWholePage'>
          <div data-aos="fade-right" className='PictureBox' >
            <FillerImage
              src={ProjectsContact1}
              alt="Blank"
            />
            <FillerImage
              src={ProjectsContact2}
              alt="Blank"
            />
          </div>
          <div className='Address'>
            <ContactUs />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
