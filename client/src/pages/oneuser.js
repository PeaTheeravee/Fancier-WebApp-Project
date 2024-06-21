import { Box } from "@mui/system";
import AdminAppBar from "../components/app-bar/admin-app-bar";
import UserAct from "../components/usershow/usersactivity";

function UserName(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <AdminAppBar/>
            <UserAct/>
        </Box>
    )
}

export default UserName;