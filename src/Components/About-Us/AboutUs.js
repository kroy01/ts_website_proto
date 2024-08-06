import "./AboutUs.css";
import ContactUs from "../Contact_Us/ContactUs";
import * as Icons from "react-bootstrap-icons";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import BoardMemberList from '../BoardMembers/BoardMemberList';
import { Board2024Images, Board2023Images, Board2022Images, Board2021Images, Board2019Images, Board2018Images } from '../BoardMembers/BoardList';


import ContentBoxx from "../ContentBox1/ContentBox";
import ourMissionActive from "../Resources/AboutUs_team.jpeg";
import ourVisionActive from "../Resources/AboutUs_vision.JPG";
import { ourMissionImages, ourVisionImages } from "./AboutUsImages";

function AboutUs(props) {

  const ExpandGallery = () => {
    if (
      document.getElementById("ExtendedGallery").className ==
      "openExtendedGallery"
    ) {
      document.getElementById("ExtendedGallery").className =
        "closeExtendedGallery";
      setTimeout(() => {
        document.getElementById("ExtendedGallery").style.display = "none";
      }, 300);
    } else {
      document.getElementById("ExtendedGallery").className =
        "openExtendedGallery";
      document.getElementById("ExtendedGallery").style.display = "block";
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="AboutUsWrapper Aboutuss">
        <div

          id="TitleContainer"

        >
          <h1
            data-aos="fade-in"
            id="TitleText"
            style={{ marginBlock: "auto", color: props.color }}
          >
            INSIGHTS
          </h1>
        </div>
        
        {/* <div
          className="AbUsWholePage"
        >
          <div data-aos="fade-right">
            <ContentBoxx
              giveid="ourMission"
              heading="Our Mission"
              activeimg={ourMissionActive}
              activealt="ex1"
              carouselItemsImages={ourMissionImages}
              text="Team Sammard is a student-based aerospace team founded in 2017 and is the official rocketry team of the Vellore Institute of Technology, Vellore campus. We are working on developing our launch vehicles to participate in the world's largest rocketry competition, Spaceport America Cup, and NASA's CanSat. We have previously achieved 7th position in CanSat and 23rd position for our launch vehicle 'PINAKA' WORLDWIDE."
            />
          </div>
        </div>
        
        <div
          className="AbUsWholePage"
        >
          <div data-aos="fade-right">
            <ContentBoxx
              giveid="ourVision"
              heading="Our Vision"
              activeimg={ourVisionActive}
              activealt="ex1"
              carouselItemsImages={ourVisionImages}
              text="We are driven by our passion for rocket science and strive to achieve excellence in everything we do! The team can now deliver launch vehicles and carry experimental payloads up to an altitude of 10,000 feet. We aspire to study, engineer and teach young space enthusiasts through mediums such as events and exhibitions like World Space Week and Bangalore Space Expo."
            />
          </div>
        </div>
        <div className="Gallery">
          <div className="GalleryHeading">
            <h1
              style={{ color: props.color, marginTop: "30vh", fontSize: "6vh" }}
            >
              OUR BOARD
            </h1>
          </div>
          <BoardMemberList
            yearheading="BOARD OF 2024"
            BoardList={Board2024Images}
          />

          <div style={{ width: "100vw", height: "auto", padding: "0.5vh 0" }}>
            <p
              className={
                props.color == "white"
                  ? "ClickhereLinkLight"
                  : "ClickhereLinkDark"
              }
              onClick={ExpandGallery}
              style={{textAlign: "center", paddingTop: '2vw' }}
            >
              <b>
                <Icons.ChevronDown /> SEE MORE
              </b>
            </p>
          </div>
          <div id="ExtendedGallery" style={{ display: "none" }}>
            <div className="previous-board-members">
              <BoardMemberList
                yearheading="BOARD OF 2023"
                BoardList={Board2023Images}
              />
              <BoardMemberList
                yearheading="BOARD OF 2022"
                BoardList={Board2022Images}
              />
              <BoardMemberList
                yearheading="BOARD OF 2021"
                BoardList={Board2021Images}
              />
              <BoardMemberList
                yearheading="BOARD OF 2019"
                BoardList={Board2019Images}
              />
              <BoardMemberList
                yearheading="BOARD OF 2018"
                BoardList={Board2018Images}
              />
              <div className="boardmemberlist-lowermargin"></div>
            </div>
          </div>
        </div>*/}
      </div>

      <div className="Address">
        <ContactUs />
      </div> 
    </div>
  );
}

export default AboutUs;
