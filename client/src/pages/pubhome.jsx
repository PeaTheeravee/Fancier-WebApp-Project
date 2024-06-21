import { Box } from "@mui/system";
import PublicAppBar from "../components/app-bar/public-app-bar"
import PubActivateDisplayArea from "../components/pubhome/pubactivitylist";
import PubFooterBar from "../components/footer/pubfooter-bar";

function PubHome(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <PublicAppBar/>
            <PubActivateDisplayArea/>
            <PubFooterBar/>
        </Box>
    )
}

export default PubHome;