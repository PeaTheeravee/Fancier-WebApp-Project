import { Box } from "@mui/system";
import LoginCard from "../components/login-register/login-card";

function Login(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <LoginCard/>
        </Box>
    )
}

export default Login;