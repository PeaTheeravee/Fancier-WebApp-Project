import { CardHeader } from "@mui/material"
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UserList() {
  const navigate = useNavigate();
  
  const guessuser = JSON.parse(sessionStorage.getItem('guessuser'));
  const gguser = JSON.parse(sessionStorage.getItem('gguser'));

  let user = null
  if (guessuser === null) {
      console.log("login from gg")
      user = gguser
  } else if (gguser === null) {
      console.log("login from guess")
      user = guessuser
  }
  console.log(user)

    return(
        <div>
          <Card sx={{ mx:'auto', my:9,maxWidth: 1000 , display: 'flex' ,background: 'linear-gradient(45deg, #ffffff 30%, #dfe2e8  90%)'}} >

                <Box >
                    <CardHeader
                      titleTypographyProps={{fontFamily:"Sarabun",fontSize: 36,}}
                      title="ผู้ใช้งาน"
                    />

                    <CardContent sx={{ width:500  }} >

                    <Stack  alignItems="center" >
                        <Box onClick={() => {navigate("/oneuser");}}>
                          <Button>
                            <Box  textAlign="left" >
                              <Typography  color="black" variant="body1" sx={{ fontSize:20 }} >
                                Nattapong Naksri 
                              </Typography>
                            </Box>
                          </Button> <br/>

                          <Button>
                            <Box  textAlign="left" >
                              <Typography  color="black" variant="body1" sx={{ fontSize:20 }} >
                              Thanapat Duongkaew 
                              </Typography>
                            </Box>
                          </Button> <br/>

                          <Button>
                            <Box  textAlign="left" >
                              <Typography  color="black" variant="body1" sx={{ fontSize:20 }} >
                                Theeravee Pathomthaninphat 
                              </Typography>
                            </Box>
                          </Button> <br/>

                          <Button>
                            <Box  textAlign="left" >
                              <Typography  color="black" variant="body1" sx={{ fontSize:20 }} >
                                Pattarachai Boriboon 
                              </Typography>
                            </Box>
                          </Button> <br/>

                          <Button>
                            <Box  textAlign="left" >
                              <Typography  color="black" variant="body1" sx={{ fontSize:20 }} >
                                Patinya Limhao
                              </Typography>
                            </Box>
                          </Button> <br/>

                          <Button>
                            <Box  textAlign="left" >
                              <Typography  color="black" variant="body1" sx={{ fontSize:20 }} >
                                Xez IIV
                              </Typography>
                            </Box>
                          </Button> <br/>
                        
                        </Box>
                    </Stack> 

                    </CardContent>

                </Box>
          </Card>

      </div>

  );
}

export default UserList;