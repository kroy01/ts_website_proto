// import { Link } from 'react-router-dom';
import LocationSign from '../Resources/LocationSign';
// import ContactLogo from './ContactLogo';
// import InstaIcon from '../Resources/InstaLogo.svg';
// import LinkedInIcon from '../Resources/LinkedinLogo.svg';
// import EmailIcon from '../Resources/MailLogo.png';
import * as Icons from 'react-bootstrap-icons';
import './ContactUs.css';

function ContactUs() {

    return (
        <>
            <div className='ContactUs'>
                <div style={{ backgroundColor: 'black', width: '100vw', height: '0.25vh' }} />
                <div className="ContactBar">
                    <div className='ContactHeading'>
                        <h1 className='ContactTitle' style={{ width: '100%', textAlign: 'center', paddingTop: '1vh', color: 'aliceblue' }}>CONTACT US</h1>
                    </div>
                    <div className='ContactWrapper'>
                        <div className='ContactColumn Col1'>
                            <LocationSign />
                            <div className='ContactAddress'>
                                <p style={{fontFamily:'Genos', fontSize:'3vmin'}}>
                                    2nd Floor, CTS Building,<br />Creation Labs, VIT,<br />Vellore Campus,<br />Tiruvalam Rd,<br />Katpadi, Vellore,<br />Tamil Nadu 632014
                                </p>
                            </div>
                            {/* <div className='ContactHomeLogo' style={{ margin: 'auto' }}>
                                <div className='ContactHomeLogo' style={{ visibility: 'hidden' }}>
                                    <ContactLogo
                                        marginside='0vw'
                                        floatalign='left'
                                    />
                                </div>
                            </div> */}
                        </div>
                        <div className='ContactColumn Col2'>
                            <a href='https://www.instagram.com/team_sammard' rel="noreferrer" target='_blank' style={{ textDecoration: 'none', color: 'aliceblue' }}>
                                <p className='Textlink AutoAlign' style={{ fontSize: '2.15vmax', display: 'flex', flexDirection: 'row', msFlexDirection: 'row', WebkitFlexDirection: 'row', alignItems: 'center', width: 'fit-content' }}>
                                    <Icons.Instagram /><span style={{ fontSize: '1.25vmax', marginLeft: '0.5vmax', fontFamily:'Genos', fontSize:'3vmin' }}>team_sammard</span>
                                </p>
                            </a>
                            <a href='https://www.linkedin.com/company/teamsammardrocketry' rel="noreferrer" target='_blank' style={{ textDecoration: 'none', color: 'aliceblue' }}>
                                <p className='Textlink AutoAlign' style={{ fontSize: '2.15vmax', display: 'flex', flexDirection: 'row', msFlexDirection: 'row', WebkitFlexDirection: 'row', alignItems: 'center', width: 'fit-content' }}>
                                    <Icons.Linkedin /><span style={{ fontSize: '1.25vmax', marginLeft: '0.5vmax', fontFamily:'Genos', fontSize:'3vmin' }}> teamsammardrocketry</span>
                                </p>
                            </a>
                            
                        </div>
                        <div className='ContactColumn Col3'>
                            <a href='mailto: teamsammard@gmail.com' rel="noreferrer" target='_blank' style={{ textDecoration: 'none', color: 'aliceblue' }}>
                                <p className='Textlink AutoAlign' style={{ fontSize: '2.15vmax', display: 'flex', flexDirection: 'row', msFlexDirection: 'row', WebkitFlexDirection: 'row', alignItems: 'center', width: 'fit-content' }}>
                                    <Icons.Envelope /><span style={{ fontSize: '1.25vmax', marginLeft: '0.5vmax', fontFamily:'Genos', fontSize:'3vmin' }}> teamsammard@gmail.com</span>
                                </p>
                            </a>
                            <p className='AutoAlign' style={{ fontSize: '2.15vmax', display: 'flex', flexDirection: 'row', msFlexDirection: 'row', WebkitFlexDirection: 'row', alignItems: 'center', width: 'fit-content' }}>
                                <Icons.Telephone /><span style={{ fontSize: '1.25vmax', marginLeft: '0.5vmax', fontFamily:'Genos', fontSize:'3vmin' }}> +91 94090 14290</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;