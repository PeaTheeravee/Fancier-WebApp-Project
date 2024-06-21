import { Box } from "@mui/system";
import ActivityInfo from "../components/activitylist/activity-info";
import AdminAppBar from "../components/app-bar/admin-app-bar";

function ActivityInfoPage(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <AdminAppBar/><br/>
            <ActivityInfo/>
        </Box>
    )
}

export default ActivityInfoPage;