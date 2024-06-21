import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { CardHeader, CardMedia } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from "../../auth";

// const responseGoogle = (response) => {
//     console.log(response.tokenId);
// }

function LoginCard() {

    const navigate = useNavigate();
    const [ username, setUsername ] = useState();
    const [ password, setPassword ] = useState();

    let auth = useAuth();

    
    const responseGoogle = async (response) => {
        auth.signin(response.tokenId, (newUser) => {
            console.log('login success.', newUser)
            if (newUser){
                if(newUser.is_staff){
                    console.log('Hi! Admin')
                    navigate('/createactivity', { replace: true })
                }else{
                    console.log('Hi! User')
                    navigate('/home', { replace: true })
                }
            }
        })
    }

    const handleSubmit = async () => {
        
        let result = await axios.post("/auth/login/", {
          username: username,
          password: password,
        }).catch(function (error) {
            if (error.response.status === 401) {
                return alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง")
            }
            else if (error.response.status === 400) {
                return alert("กรุณาใส่ชื่อผู้ใช้และรหัสผ่านให้ครบถ้วน")
            }
        })
        console.log("login success");
        if (result.status === 200 && result.data) {
            sessionStorage.setItem('access', result.data.access);
            sessionStorage.setItem('refresh', result.data.refresh);
            let response = await axios.get('https://wd0103.coe.psu.ac.th/scauth/gglogin/', {
                headers: {
                    'Authorization': `Bearer ${result.data.access}`
                }
            })
            sessionStorage.setItem('guessuser', JSON.stringify(response.data));
            console.log(response.data)
            if ( response.data.is_staff === true ) {
                console.log('Hi! Admin')
                navigate('/createactivity', { replace: true })
            }else if ( response.data.is_staff === false ){
                console.log('Hi! User')
                navigate('/home', { replace: true })
            }
        }
    };
    
    return(
        <div>
            <Box>
                <Card sx={{ mx:'auto', my: 13, maxWidth: 695 , display: 'flex' ,background: 'linear-gradient(45deg, #ffffff 30%, #dfe2e8  90%)'}} >
                    <Box sx={{ display:'flex', flexDirection:'column' }}>
                        <CardMedia
                            component="img"
                            height="42%"
                            width="42%"
                            image="/img/123.png"
                            alt="logo"
                        />
                        <CardHeader
                        titleTypographyProps={{fontFamily: 'Sarabun', fontSize: 36}}
                        title="เข้าสู่ระบบ"
                        />
                        <table width="100%">
                            <tr>
                                <td>
                                    <CardContent sx={{ width:300 }}>
                                    <Typography 
                                        variant="body1" 
                                        sx={{ fontSize:16 }}>
                                        ชื่อผู้ใช้
                                    </Typography>
                                    <Box
                                        component="form"
                                        sx={{
                                            m: 1,
                                        }}
                                        noValidate
                                        autoComplete="off"
                                        >
                                    
                                        <TextField 
                                            variant="outlined" 
                                            required
                                            id="username"
                                            label="ชื่อผู้ใช้"
                                            name="username"
                                            autoComplete="username"
                                            autoFocus
                                            onChange={e => setUsername(e.target.value)}
                                        />
                                    </Box>
                                    <Typography 
                                        variant="body1" 
                                        sx={{ fontSize:16 }}>
                                        รหัสผ่าน
                                    </Typography>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                        >
                                    <TextField
                                        variant="outlined" 
                                        required
                                        id="password"
                                        label="รหัสผ่าน"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    <Typography sx={{ fontSize:13, color:'#e53935'}} >*รหัสผ่านต้องมีอย่างน้อย 8 ตัว ประกอบด้วยตัวอักษรภาษาอังกฤษ ตัวเลขและอักษรพิเศษ</Typography>
                                    <CardContent>
                                        <Stack spacing={2} direction="row">
                                            <Button variant="contained" onClick={handleSubmit}>เข้าสู่ระบบ</Button><Typography><Button onClick={() => {navigate("/public");}}>ย้อนกลับ</Button></Typography>
                                        </Stack>
                                        <br />
                                        <Typography>หากไม่มีบัญชี <Button onClick={() => {navigate("/register");}}>สร้างบัญชี</Button></Typography>
                                    </CardContent>
                                    </Box>
                                    </CardContent>
                                    </td>
                                    <td>
                                    <CardContent sx={{ width:50 }}>
                                        <div className="decoration-inside"/>
                                        <br/><br/><br/><br/><br/><br/>
                                    </CardContent>
                                    </td>
                                    <td>
                                    <CardContent sx={{ width:190 }}>
                                        <Box>
                                            <Typography variant="body1" textAlign='center'>Google</Typography>
                                            <GoogleLogin
                                                clientId="888881399412-spgq58e4cmhhs05icgb2uhct4584aenl.apps.googleusercontent.com"
                                                buttonText="Login with Google"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                            />
                                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                        </Box>
                                    </CardContent>
                                </td>
                            </tr>
                        </table>
                    </Box>
                </Card>
            </Box>
      </div>
  );
}

export default LoginCard;
