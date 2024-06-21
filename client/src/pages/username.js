import { Box } from "@mui/system";
import AdminAppBar from "../components/app-bar/admin-app-bar";
import UserList from "../components/usershow/userlist";

function UserName(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <AdminAppBar/>
            <UserList/>
        </Box>
    )
}

export default UserName;