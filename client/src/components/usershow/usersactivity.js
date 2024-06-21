import { CardHeader } from "@mui/material"
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import { Box } from "@mui/system";

import Stack from '@mui/material/Stack';

import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
function UserAct() {
  const navigate = useNavigate();
    return(
        <div>
          <Card sx={{ mx:'auto', my:9,maxWidth: 1000 , display: 'flex' ,background: 'linear-gradient(45deg, #ffffff 30%, #dfe2e8  90%)'}} >

                <Box >
                    <CardHeader
                      titleTypographyProps={{fontFamily:"Sarabun" ,fontSize: 36,}}
                      title="กิจกรรมที่เคยเข้าร่วม"         
                    />

                    <CardContent  sx={{ width:650 }}>
                    <Stack  alignItems="center"  >
                      <Box>
                        <Button sx={{ fontSize:18 }}>
                              กิจกรรมวิ่งเพื่อสุขภาพ <br/>
                        </Button><br />
                        <Button sx={{ fontSize:18 }}>
                              กิจกรรมปั่นจักรยานเพื่อสุขภาพ <br/>
                        </Button><br />
                        <Button sx={{ fontSize:18 }}>
                              กิจกรรมนั่งสมาธิ จิตสงบ <br/>
                        </Button><br />
                      </Box>
                    </Stack>
                    <br />
                    <br />
                    <Stack spacing={2} direction="row">
                    <Box onClick={() => {navigate("/username");}}>
                      <Button variant="contained">◀ ย้อนกลับ</Button>
                    </Box>
                    </Stack>

                    </CardContent>

                    <CardActions>

                    </CardActions>

                </Box>
          </Card>
      </div>

  );
}

export default UserAct;