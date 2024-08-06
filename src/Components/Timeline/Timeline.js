import './Timeline.css';
import ContactUs from '../Contact_Us/ContactUs';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

import TLPattern from '../Resources/Timeline_pattern.png';
import TLPatternRev from '../Resources/Timeline_pattern_reverse.png';
import TLPatternRevTrans from '../Resources/Timeline_pattern_reverse_transparent.png'
import DarkTimelineImg from '../Resources/Timeline_dark.png';
import LightTimelineImg from '../Resources/Timeline_light.png';
import TimelineImage from '../Resources/Timeline/Image1.png';

function Timeline(props) {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div id='TimelineContainer' style={{ paddingTop: '7vh', display: 'flex', flexDirection: 'column', msFlexDirection: 'column', WebkitFlexDirection: 'column', justifyContent: 'space-between', WebkitJustifyContent: 'space-between', height: '100vh', backgroundColor: props.darkmode ? '#000505' : 'white' }}>
                <img src={TLPatternRev} alt="Timeline" style={{ width: '100vw', paddingTop: '2vh' }} />
                <h1 data-aos="fade-right" id='TitleText' style={{ marginInline: 'auto', color: props.darkmode ? 'white' : '#252525' }}>TIMELINE</h1>
                <img src={TLPattern} alt="Timeline" style={{ width: '100vw' }} />
            </div>
            <div className='timeline-background'>
                {/* <div className='timeline-image-topbackground'>
                    <img src={TLPatternRevTrans} className='timeline-reverse-background'/>
                </div> */}
                <div className='timeline-imagebox TimelineWrapper'>
                    {/* <div className='timeline-image-topbackground'>
                        <img src={TLPatternRevTrans} className='timeline-reverse-background' />
                    </div> */}
                    {/* <img src={props.darkmode ? DarkTimelineImg : LightTimelineImg} alt="Timeline" style={{ backgroundColor: props.darkmode ? '#000505' : 'white', paddingTop: '2.5vh', textAlign: "center", height: "auto", width: "100vw" }} /> */}
                    <div className='timeline-image-margin'>
                        <img src={props.darkmode ? TimelineImage : TimelineImage} alt="Timeline" className='timeline-image' />
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#252525" }}>
                <ContactUs />
            </div>
        </>
    )

}
export default Timeline;