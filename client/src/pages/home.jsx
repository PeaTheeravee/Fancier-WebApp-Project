import { Box } from "@mui/system";
import ActivateDisplayArea from "../components/home/activity-display-area";
import PannAppBar from "../components/app-bar/pann-app-bar";
import FooterBar from '../components/footer/footer-bar'


function Home(){
    return(
                <Box sx={{ flexGrow: 1}}>
                        <PannAppBar/>
                        <ActivateDisplayArea/>
                        <FooterBar/>
                </Box>

    )
}

export default Home;