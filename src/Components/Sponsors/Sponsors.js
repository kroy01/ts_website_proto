
import ContactUs from '../Contact_Us/ContactUs';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import './Sponsors.css';
import EmailBox from '../EmailForm/EmailInputForm';
import ImageBox from '../ImagesBox/ImageBox';

import TeamLogo from '../Resources/Sammard.png';
import ANSYS from '../Resources/Sponsors/Ansys.png';
import EPSoft from '../Resources/Sponsors/EPSoft.png';
import StarLabs from '../Resources/Sponsors/StarLabs.png';
import Loanswall from '../Resources/Sponsors/Loanswall.png';
import SolidWorks from '../Resources/Sponsors/SolidWorks.png';
import Simscale from '../Resources/Sponsors/Simscale.png';
import ContactBox from '../Contact_box/ContactBox';


function Sponsers(props) {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className='SponsorsWrapper'>
            <div className='WholePage' id='TitleContainer' style={{ height: '100vh' }}>
                <h1 data-aos="fade-right" id='TitleText' style={{ marginBlock: 'auto', color: props.color }}>SPONSORS</h1>
            </div>
            <div className='SponsorsWholePage'>
                <div data-aos="fade-right" className='sponsers-set-view'>
                    <div className='sponsers-subset-view'>

                        <ImageBox
                            image={ANSYS}
                            alt="ex1"
                        />

                        <ImageBox
                            image={EPSoft}
                            alt="ex1"
                        />


                        <ImageBox
                            image={StarLabs}
                            alt="ex1"
                        />

                    </div>


                    <div className='sponsers-subset-view'>
                        <ImageBox
                            image={Loanswall}
                            alt="ex1"
                        />

                        <ImageBox
                            image={SolidWorks}
                            alt="ex1"
                        />

                        <ImageBox
                            image={Simscale}
                            alt="ex1"
                        />
                    </div>
                </div>

                <div data-aos="fade-right" className='SponsorsView CenteringChildren' style={{ width: '100vw', height: 'auto', display: 'flex', paddingInline: '4vw', gap: '30vw', paddingLeft: '7vw', paddingRight: '7vw' }}>
                    <EmailBox />
                </div>


                <div className='BasePage' >
                    <div className='contactus'>
                        <ImageBox
                            image={TeamLogo}
                            alt="Sammard Logo"
                            style={{ width: "20%", aspectRatio: "1/1" }}
                        />
                        <ContactBox
                            heading='Contact Us'
                            link="https://forms.gle/96mYGKkzTTVRMxwS6"
                            linktext="Link To Google Forms"
                        />
                    </div>
                    <div className='contactbox1'>
                        <ContactBox
                            heading='Contact Us'
                            link="https://forms.gle/96mYGKkzTTVRMxwS6"
                            linktext="Link To Google Forms"
                        />
                    </div>
                    <div className='Address'>
                        <ContactUs />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsers;