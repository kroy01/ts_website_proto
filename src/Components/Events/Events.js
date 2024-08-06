import './Events.css';
import ContentBoxx from '../ContentBox1/ContentBox';
import ContactUs from '../Contact_Us/ContactUs';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { bsx, spaceWeek, technoVit, gravitas } from './EventImages';
import BSXmain from '../Resources/BSX_main.jpeg';
import SpaceWeekMain from '../Resources/2022/SpaceWeek22_2.jpeg';
import Technomain from '../Resources/Techno_main.jpeg';
import Gravitasmain from '../Resources/Gravitas_main.jpeg';
import EventsContact1 from '../Resources/2022/BSX22_4.jpg';
import EventsContact2 from '../Resources/2022/SpaceWeek22_3.jpeg';
import FillerImage from '../FillerImage/FillerImage';

function Events(props) {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className='EventsWrapper'>
            {/* <div className='EventsWholePage' id='TitleContainer' style={{ height: '100vh' }}>
                <h1 data-aos="fade-in" id='TitleText' style={{ marginBlock: 'auto', color: props.color }}>EVENTS</h1>
            </div> */}
            <div id='TitleContainer'>
                <h1 data-aos="fade-in" id='TitleText' style={{ marginBlock: 'auto', color: props.color }}>EVENTS</h1>
            </div>
            {/* <div className='EventsContent'>
                <div className='EventsWholePage' id='BSXid' style={{ paddingTop: '10vh', paddingLeft: '6vw', paddingRight: '6vw' }}>
                    <div data-aos="fade-right">
                        <ContentBoxx
                            giveid="BSX"
                            heading="BSX"
                            activeimg={BSXmain}
                            activealt="ex1"
                            carouselItemsImages={bsx}
                            text="Team Sammard has held exhibits at renowned events such as ISRO's Bangalore Space Expo (Indian Space Research Organisation), where the team presented our projects to well-known companies in our field. The team also had the opportunity to meet with the ISRO chairman and experts to discuss our future in the space industry."
                        />
                    </div>
                </div>
                <div className='EventsWholePage' id='SpaceWeekid' style={{ paddingTop: '10vh', paddingLeft: '6vw', paddingRight: '6vw' }}>
                    <div data-aos="fade-right">
                        <ContentBoxx
                            giveid="spaceWeek"
                            heading="SPACE WEEK"
                            activeimg={SpaceWeekMain}
                            activealt="ex1"
                            carouselItemsImages={spaceWeek}
                            text="We participated in World Space week organized by ISRO. Where we presented our projects alongside models of ISRO’s Present, Past, and Future. The exhibit was established to generate awareness and enthusiasm toward Space in students. We presented our rocket, Pinaka mesmerizing the crowd of students."
                        />
                    </div>
                </div>
                <div className='EventsWholePage' id='Technoid' style={{ paddingTop: '10vh', paddingLeft: '6vw', paddingRight: '6vw' }}>
                    <div data-aos="fade-right">
                        <ContentBoxx
                            giveid="technoVit"
                            heading="TECHNO VIT"
                            activeimg={Technomain}
                            activealt="ex1"
                            carouselItemsImages={technoVit}
                            text={"The purpose and objectives of the Techno VIT event the team partook in are as follows:<br>" +
                                "1. To introduce and familiarize students with model and sounding rocketry.<br>" +
                                "2. Basics and workings of the software OpenRocket. (workshop)<br>" +
                                "3. A challenge for attendants to complete a design of a model rocket for a provided problem statement."}
                        />
                    </div>
                </div>
                <div className='EventsWholePage' id='Gravitasid' style={{ paddingTop: '10vh', paddingLeft: '6vw', paddingRight: '6vw' }}>
                    <div data-aos="fade-right">
                        <ContentBoxx
                            giveid="gravitas"
                            heading="GRAVITAS"
                            activeimg={Gravitasmain}
                            activealt="ex1"
                            carouselItemsImages={gravitas}
                            text="We were given the chance to participate in the largest tech fest of VIT. When we presented our projects to tech industry experts, we learned of the current developments and advancements of major corporations and methods of implementing them in our designs."
                        />
                    </div>
                </div>
            </div>
            
            <div className='BasePage'>
                <div data-aos="fade-right" className='PictureBox' >
                    <FillerImage
                        src={EventsContact1}
                        alt="Blank"
                    />
                    <FillerImage
                        src={EventsContact2}
                        alt="Blank"
                    />
                </div>
                <div className='Address'>
                    <ContactUs />
                </div>
            </div> */}
        </div>
    );
}

export default Events;