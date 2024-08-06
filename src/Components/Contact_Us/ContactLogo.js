import LogoPic from "../Resources/LogoPic.png"
//Function to use  team LOGO 
function ContactLogo(props){
    return(
        <>
            <img src={LogoPic} alt="Sammard Logo" style={{ width: '4vmax',float: props.floatalign, marginLeft: props.marginside }} />
        </>
    )
}
export default ContactLogo;