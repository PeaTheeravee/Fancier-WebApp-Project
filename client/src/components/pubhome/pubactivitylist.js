import { CardHeader, Dialog, DialogActions, DialogTitle, Grid, Stack } from "@mui/material"
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Text, StyleSheet } from 'react-native';
import Video from "../video/video";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import '../kittyanimation/kitty-style.css'

const CssTextField = styled(TextField)({
  '& label': {
    color: 'black',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

function PubActivateDisplayArea() {

  const [open, setOpen] = React.useState(false);
  const [activitycards, setActivitycards] = useState([])
  const navigate = useNavigate()

  const getActivityCards = async () => {
    const response = await axios.get('http://localhost:8000/api/activities/')
    setActivitycards(response.data)
  }

  useEffect(() => {
    getActivityCards();
  }, []);

  const [filteredActivitycards, setFilteredActivitycards] = useState([])
    const [search, setSearch] = useState("")

  useEffect(() => {
      setFilteredActivitycards(
          activitycards.filter( activitycard => {
              return activitycard.name.includes(search)
          })
      )
  }, [search, activitycards])

  const handleClose = () => {
    setOpen(false);
  };

  const styles = StyleSheet.create({
    baseText: {
      fontSize: '18px',
      fontWeight: 'bold',
      color:'#0B46FF',
      fontFamily:'Sarabun',
      
    },
    passText: {
      fontSize: '18px',
      fontWeight: 'bold',
      color:'green',
      fontFamily:'Sarabun',
    },

    notpassText: {
      fontSize: '18px',
      fontWeight: 'bold',
      color:'red',
      fontFamily:'Sarabun',
    },

    waitText: {
      fontSize: '18px',
      fontWeight: 'bold',
      color:'grey',
      fontFamily:'Sarabun',
    },
    
  });

return(
      <div>
        <Box sx={{ 
          
          display: "flex",
          flexDirection: "row",
          mt: 5,
          }}>
            <Box sx={{ 
              width: 1200,
              }}>
                <Box sx={{ mx:-30}}>
                  <Typography sx={{ fontSize: 140, fontWeight: 600, ml: '35%' }} color="#FFF">
                    FANCIER
                  </Typography>
                  <Box sx={{ mx:50}}>
                    <Typography sx={{fontSize: 30, fontWeight: 100, ml: '35%' }} color="#FFF" >
                      Activity Registration เว็บลงทะเบียนกิจกรรม
                    </Typography>
                  </Box>
                </Box>
            </Box>
          <Box sx={{ width: 500}}>
          <Box sx={{ mx:1,mt:-5}}>
            <div className="container">
                <div className="kitty">
                    <div className="face">
                        <div className="ear"></div>
                        <div className="eye"></div>
                        <div className="mouth">
                            <div className="nose"></div>
                            <div className="whisker-1"></div>
                            <div className="whisker-2"></div>
                        </div>
                        <div className="body">
                            <div className="hand">
                                <div className="hand-l"></div>
                                <div className="hand-r"></div>
                            </div>
                        </div>
                        <div className="tail"></div>
                    </div>
                    <div className="laptop">
                        <div className="logo"></div>
                    </div>
                </div>
            </div>
            </Box>
          </Box>
        </Box>

        <Box sx={{ 
            // border:'1px dashed grey',
            mt: 10,
          }}>
          <Grid container justifyContent= "center">
              <Card sx={{ 
                  // border:'1px dashed grey',
                  height: 'auto',
                  width: 'auto',
                  background: ' linear-gradient(217deg, rgba(182, 62, 238, 0.8), rgba(255,0,0,0) 100%),linear-gradient(127deg, rgba(0, 195, 255, 0.8), rgba(0,255,0,0) 100%),linear-gradient(336deg, rgb(63, 43, 245, 0.8), rgba(0,0,255,0) 100%);'
                }}>
                <Grid container justifyContent= "center">
                  <CardMedia sx={{ m:10 }}>
                    <Video/>
                  </CardMedia>
                </Grid>
              </Card>
          </Grid>
        </Box>
        
        <Box sx={{ mx: 'auto', my: 10 }}>
          <Grid container justifyContent= "center">
            <Typography sx={{ fontSize: 100, fontWeight: 600, mx: 'auto' }} color="#FFF">
              ACTIVITIES
            </Typography>
          </Grid>

              <Grid container justifyContent= "center">
                <CssTextField
                  id="search" 
                  label="Search" 
                  variant="outlined"
                  sx={{ mx: "0%", my: "auto", width:1000 }}
                  onChange={e => setSearch(e.target.value)}
                />  
              </Grid>

      
            {filteredActivitycards.map((activitycard) => (
              <Card key={activitycard.id} sx={{ mx:'auto', my:3,maxWidth: 1200 , display: 'flex' , bgcolor: 'grey'}} >
                    <CardMedia sx={{maxWidth: 500, maxHeight: 'auto'}}
                        component="img"
                        image={activitycard.image}
                    />
                    <Box sx={{ display:'flex', flexDirection:'column' ,background: 'linear-gradient(45deg, #ffffff 30%, #dfe2e8  90%)'}}>
                        <CardHeader
                          titleTypographyProps={{fontSize: 36,fontFamily:'Sarabun'}}
                          title={activitycard.name}
                          subheaderTypographyProps={{fontSize: 18,fontFamily:'Sarabun'}}
                          subheader={activitycard.description}
                        />
                        <CardContent sx={{ width:700 }}>
                          <Typography 
                            variant="body1" 
                            sx={{ fontSize:18 ,fontFamily:'Sarabun'}}>
                            ลงทะเบียน : เริ่ม {activitycard.register_time_start} | สิ้นสุด {activitycard.register_time_end}<br />
                            กิจกรรม : เริ่ม {activitycard.activity_time_start}  | สิ้นสุด {activitycard.activity_time_end}<br />
                            จำนวนผู้เข้าร่วมสูงสุด : {activitycard.max_participant} คน <br/>
                            ประเภท: {activitycard.activity_type.replace('FCFS','First come first serve').replace('C', 'Candidate')} <br/>
                          </Typography>
                      
                          <Text style={styles.baseText} >
                            สถานะ :
                            <Text style={styles.waitText}> รอการพิจารณา</Text>
                          </Text>  
                        </CardContent>

                        {/* ปุ่มลงทะเบียนและป็อปอัพ */}
                        <CardActions>
                            <Stack spacing={2} direction="row">
                                <Button  sx={{ fontFamily:'Sarabun',fontSize: 15 }} variant="contained" onClick={() => {navigate("/login");}}>
                                ลงทะเบียน
                                </Button>
                              <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                maxWidth= 'md'
                              >
                                <DialogTitle id="alert-dialog-title" gutterBottom variant="h1" sx={{color: '#004AAD'}}>
                                  <Typography sx={{ fontSize: '50px'}} >
                                    <h1>ลงทะเบียนสำเร็จ!!</h1>
                                  </Typography>
                                </DialogTitle>
                                <DialogActions >
                                  <Button sx={{ fontSize: '30px'}} onClick={handleClose} >กลับสู่หน้าหลัก </Button>
                                </DialogActions>
                              </Dialog>
                            </Stack>
                        </CardActions>
                        
                        <CardContent sx={{ width:700 }}>
                        <Typography variant="h6" color='error.main' sx={{ fontFamily:'Sarabun',fontSize: 16 }}>
                          จำนวนที่นั่งเหลือ 0 ท่านยังสามารถลงทะเบียนเป็นที่นั่งสำรองได้
                          <br />
                          หากต้องการสละสิทธิ์ กรุณาติดต่อช่องทางใดช่องทางหนึ่ง
                        </Typography>
                        </CardContent>               
                  </Box>
            </Card>
            )
            )
          }
        </Box>
      </div>
  );
}

export default PubActivateDisplayArea ;