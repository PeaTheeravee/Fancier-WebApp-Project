import { Box } from "@mui/system";
import PannAppBar from "../components/app-bar/pann-app-bar";
import ContactStudentCard from "../components/contact/contact-student-card";
import FooterBar from '../components/footer/footer-bar'


function Contact(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <PannAppBar/>
            <ContactStudentCard/>
            <FooterBar/>
        </Box>
    )
}

export default Contact;