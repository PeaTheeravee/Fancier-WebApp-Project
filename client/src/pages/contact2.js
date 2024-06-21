import { Box } from "@mui/system";
import PubAppBar from "../components/app-bar/public-app-bar";
import ContactStudentCard from "../components/contact/contact-student-card";
import PubFooterBar from "../components/footer/pubfooter-bar";


function PublicContact(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <PubAppBar/>
            <ContactStudentCard/>
            <PubFooterBar/>
        </Box>
    )
}

export default PublicContact;