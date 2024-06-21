import { Box } from "@mui/system";
import PublicAppBar from "../components/app-bar/public-app-bar";
import About from "../components/about/adout";
import PubFooterBar from "../components/footer/pubfooter-bar";

function Aboutpublic() {
    return(
        <Box sx={{ flexGrow: 1}}>
            <PublicAppBar/>
            <About/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <PubFooterBar/>
        </Box>
    )
}

export default Aboutpublic;