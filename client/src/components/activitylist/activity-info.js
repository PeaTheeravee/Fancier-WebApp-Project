import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

const CssTextField = styled(TextField)({
  '& label': {
    color: 'black',
  },
  '& label.Mui-focused': {
    color: 'white',
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

export default function ActivityInfo() {

  const [activitycards, setActivitycards] = useState([])

  const getActivityCards = async () => {
      const response = await axios.get('http://localhost:8000/api/activities/')
      setActivitycards(response.data)
  }

  useEffect(() => {
      getActivityCards();
  }, []);

  // search
  const [filteredActivitycards, setFilteredActivitycards] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
      setFilteredActivitycards(
          activitycards.filter( searchcard => {
              return searchcard.name.includes(search)
          })
      )
  }, [search, activitycards])
  
  // delete
  const deleteCard = async (id, name) => {
    const singlecardurl = 'http://localhost:8000/api/activities/'+id+'/'
    const confirmation = window.confirm("ต้องการจะลบ"+name+"หรือไม่")
    
    if (confirmation === true) {
      await axios.delete(singlecardurl)
      alert(name + "ถูกลบเรียบร้อยแล้ว")
      window.location.reload();
      // console.log(id+"has been deleted")
    }
  }

  return (
      <Box>
        <Grid container justifyContent= "center">
          <CssTextField 
            id="search" 
            label="Search" 
            variant="outlined"
            sx={{ mx: "0%", my: "auto", width:1000 }}
            onChange={e => setSearch(e.target.value)}
          />  
        </Grid>

        {filteredActivitycards.map((searchcard) => (
          <Card key={searchcard.id} sx={{ mx:'auto', my:2, maxWidth: 1000 , display: 'flex' , bgcolor: 'grey' }} >
            <Box sx={{ display:'flex', flexDirection:'column' }}>
              <CardContent sx={{ width:1000, pt: 1 }} >
                <Typography
                  variant="body1"
                  sx={{ 
                    fontFamily: 'Sarabun', 
                    fontSize: 30,
                    ml: 2, 
                    mt: 1,
                  }}>
                  {searchcard.name}
                </Typography>

                <Box sx={{ ml: 2, mb: 1 }}>
                  <Typography 
                    variant="body1" 
                    sx={{ fontFamily: 'Sarabun', fontSize:16 }}
                  >
                      ประเภทกิจกรรม: {searchcard.activity_type.replace("FCFS", "First come first serve").replace("C", "Candidate")} <br />
                      รายละเอียดกิจกรรม: {searchcard.description} <br />
                      จำนวนคนเข้าร่วมสูงสุด: {searchcard.max_participant} <br />
                      ระยะเวลาเปิดลงทะเบียน: {searchcard.register_time_start} - {searchcard.register_time_end} <br />
                      ระยะเวลากิจกรรม: {searchcard.activity_time_start} - {searchcard.activity_time_end} <br />
                  </Typography>
                </Box>
                  <Typography color="black" variant="body1" sx={{ fontFamily: 'Sarabun', fontSize:20 }} >
                      รายชื่อคนผ่าน
                  </Typography>
                
                  <Typography>
                    1. Nattapong Naksri<br/>
                    2. Thanapat Duongkaew<br/>
                    3. Theeravee Pathomthaninphat<br/>
                    4. Pattarachai Boriboon<br/>
                    5. Patinya Limhao<br/>
                    6. Xez IIV<br/>
                    7. <br/>
                    8. <br/>
                    9. <br/>
                    10. <br/>
                  </Typography>


                <Typography 
                  color="black" 
                  variant="body1" 
                  sx={{ 
                    fontFamily: 'Sarabun', 
                    fontSize:20 
                  }} >
                  คิวสำรอง
                </Typography>
                <Typography>
                    1. <br/>
                    2. <br/>
                    3. <br/>
                    4. <br/>
                    5. <br/>
                    6. <br/>
                    7. <br/>
                    8. <br/>
                    9. <br/>
                    10.<br/>
                  </Typography>
                  
                <Button 
                  variant="contained" 
                  color="error"
                  onClick={() => deleteCard(searchcard.id, searchcard.name)}
                >
                  ลบกิจกรรม
                </Button>
              </CardContent>
            </Box>
          </Card> ))}
      </Box>
    );
}