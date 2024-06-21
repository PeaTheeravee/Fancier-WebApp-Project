import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { CardHeader } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import CardActions from '@mui/material/CardActions';
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import axios from "axios";

        //  ปุ่มupload 
const Input = styled('input')({
  display: 'none',
});

function CreateActivity() {

      //  info ต่างๆใน card   
  const [image, setImage] = useState(null);
  const handleChangeImage = (event) => {
    setImage(event.target.files[0])
  };

  const [name, setName] = useState("");
  const handleChangeName = (event) => {
    setName(event.target.value)
  };

  const [description, setDescription] = useState("");
  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  };

  const [max_participant, setMax_participant] = useState("");
  const handleChangeMax_participant = (event) => {
    setMax_participant(event.target.value)
  };

  const [activity_type, setActivity_type] = useState("");
  const handleChangeActivity_type = (event) => {
    setActivity_type(event.target.value)
  };

  // register time start
  const [regis_time_start_year, setRegis_time_start_year] = useState("");
  const handleChangeRegis_time_start_year = (event) => {
    setRegis_time_start_year(event.target.value)
  };
  const [regis_time_start_month, setRegis_time_start_month] = useState("");
  const handleChangeRegis_time_start_month = (event) => {
    setRegis_time_start_month(event.target.value)
  };
  const [regis_time_start_date, setRegis_time_start_date] = useState("");
  const handleChangeRegis_time_start_date = (event) => {
    setRegis_time_start_date(event.target.value)
  };
  const [regis_time_start_hour, setRegis_time_start_hour] = useState("");
  const handleChangeRegis_time_start_hour = (event) => {
    setRegis_time_start_hour(event.target.value)
  };
  const [regis_time_start_minute, setRegis_time_start_minute] = useState("");
  const handleChangeRegis_time_start_minute = (event) => {
    setRegis_time_start_minute(event.target.value)
  };

  // register time end
  const [regis_time_end_year, setRegis_time_end_year] = useState("");
  const handleChangeRegis_time_end_year = (event) => {
    setRegis_time_end_year(event.target.value)
  };
  const [regis_time_end_month, setRegis_time_end_month] = useState("");
  const handleChangeRegis_time_end_month = (event) => {
    setRegis_time_end_month(event.target.value)
  };
  const [regis_time_end_date, setRegis_time_end_date] = useState("");
  const handleChangeRegis_time_end_date = (event) => {
    setRegis_time_end_date(event.target.value)
  };
  const [regis_time_end_hour, setRegis_time_end_hour] = useState("");
  const handleChangeRegis_time_end_hour = (event) => {
    setRegis_time_end_hour(event.target.value)
  };
  const [regis_time_end_minute, setRegis_time_end_minute] = useState("");
  const handleChangeRegis_time_end_minute = (event) => {
    setRegis_time_end_minute(event.target.value)
  };

  
  // activity time start
  const [activity_time_start_year, setActivity_time_start_year] = useState("");
  const handleChangeActivity_time_start_year = (event) => {
    setActivity_time_start_year(event.target.value)
  };
  const [activity_time_start_month, setActivity_time_start_month] = useState("");
  const handleChangeActivity_time_start_month = (event) => {
    setActivity_time_start_month(event.target.value)
  };
  const [activity_time_start_date, setActivity_time_start_date] = useState("");
  const handleChangeActivity_time_start_date = (event) => {
    setActivity_time_start_date(event.target.value)
  };
  const [activity_time_start_hour, setActivity_time_start_hour] = useState("");
  const handleChangeActivity_time_start_hour = (event) => {
    setActivity_time_start_hour(event.target.value)
  };
  const [activity_time_start_minute, setActivity_time_start_minute] = useState("");
  const handleChangeActivity_time_start_minute = (event) => {
    setActivity_time_start_minute(event.target.value)
  };

  // activity time end
  const [activity_time_end_year, setActivity_time_end_year] = useState("");
  const handleChangeActivity_time_end_year = (event) => {
    setActivity_time_end_year(event.target.value)
  };
  const [activity_time_end_month, setActivity_time_end_month] = useState("");
  const handleChangeActivity_time_end_month = (event) => {
    setActivity_time_end_month(event.target.value)
  };
  const [activity_time_end_date, setActivity_time_end_date] = useState("");
  const handleChangeActivity_time_end_date = (event) => {
    setActivity_time_end_date(event.target.value)
  };
  const [activity_time_end_hour, setActivity_time_end_hour] = useState("");
  const handleChangeActivity_time_end_hour = (event) => {
    setActivity_time_end_hour(event.target.value)
  };
  const [activity_time_end_minute, setActivity_time_end_minute] = useState("");
  const handleChangeActivity_time_end_minute = (event) => {
    setActivity_time_end_minute(event.target.value)
  };

  const register_time_start = regis_time_start_date+'/'+regis_time_start_month+'/'+regis_time_start_year+' '+regis_time_start_hour+':'+regis_time_start_minute;
  const register_time_end = regis_time_end_date+'/'+regis_time_end_month+'/'+regis_time_end_year+' '+regis_time_end_hour+':'+regis_time_end_minute;
  const activity_time_start = activity_time_start_date+'/'+activity_time_start_month+'/'+activity_time_start_year+' '+activity_time_start_hour+':'+activity_time_start_minute;
  const activity_time_end = activity_time_end_date+'/'+activity_time_end_month+'/'+activity_time_end_year+' '+activity_time_end_hour+':'+activity_time_end_minute;



  const CreateAdminInfo = async () => {
    let formField = new FormData()

    if ((name === "กิจกรรม") || (name === "")) {
      return alert("กรุณาตรวจสอบชื่อกิจกรรมให้ถูกต้อง")
    }
    else if (activity_type !== "FCFS" && activity_type !== "C") {
      return alert("กรุณาตรวจสอบประเภทกิจกรรมให้ถูกต้อง\n FCFS or C")
    }
    else if (max_participant.length > 5) {
      return alert("กรุณาตรวจสอบจำนวนผู้เข้าร่วมสูงสุดให้ถูกต้อง")
    }
    else if ((regis_time_start_date.length !== 2) || (regis_time_start_month.length !== 2 ) || (regis_time_start_year.length !== 4 ) || (regis_time_start_hour.length !== 2 ) || (regis_time_start_minute.length !== 2 ) || (regis_time_end_date.length !== 2) || (regis_time_end_month.length !== 2 ) || (regis_time_end_year.length !== 4 ) || (regis_time_end_hour.length !== 2 ) || (regis_time_end_minute.length !== 2 ) || (activity_time_start_date.length !== 2) || (activity_time_start_month.length !== 2 ) || (activity_time_start_year.length !== 4 ) || (activity_time_start_hour.length !== 2 ) || (activity_time_start_minute.length !== 2 ) || (activity_time_end_date.length !== 2) || (activity_time_end_month.length !== 2 ) || (activity_time_end_year.length !== 4 ) || (activity_time_end_hour.length !== 2 ) || (activity_time_end_minute.length !== 2 )) {
      return alert("กรุณาตรวจสอบวันที่และเวลาให้ถูกต้อง\n dd/mm/yyyy\n hh:mm")
    }

    if (image !== null) {
      formField.append('image', image)
    }
    formField.append('image', image)
    formField.append('name', name)
    formField.append('description', description)
    formField.append('max_participant', max_participant)
    formField.append('activity_type', activity_type)
    formField.append('register_time_start', register_time_start)
    formField.append('register_time_end', register_time_end)
    formField.append('activity_time_start', activity_time_start)
    formField.append('activity_time_end', activity_time_end)

    await axios({
      method: 'post',
      url: 'http://localhost:8000/api/activities/',
      data: formField
    }).catch(function (error) {
      if (error.response.status === 400) {
        return alert("กรุณากรอกข้อมูลให้ครบถ้วน")
      }
      console.log(error.response.status);
    }).then((response) => {
      console.log(response.data);
      alert("สร้างกิจกรรมสำเร็จ")
      window.location.reload();
    })
  };

  return(
    <div>
      <Box sx={{ mx: 'auto', mt: 10  }}>
      
        {/* การ์ด */}
        <Card sx={{ mx:'auto', my:3, maxWidth: 1000 , display: 'flex' , bgcolor: 'grey' ,background: 'linear-gradient(45deg, #ffffff 30%, #dfe2e8  90%)'}} >

              <Box sx={{ display:'flex', flexDirection:'column' }}>
                  <CardHeader
                    titleTypographyProps={{fontFamily:"Sarabun",fontSize: 36,}}
                    title="สำหรับการสร้างกิจกรรม"
                  />
                  <CardContent sx={{ width: 700 }}>

                  {/* กรอกข้อความชื่อกิจกรรม */}
                    <Typography 
                      variant="body1" 
                      sx={{ fontSize:20 }}>
                      ชื่อกิจกรรม
                    </Typography>
                    <Box
                      component="form"
                      sx={{
                          '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                      autoComplete="off"
                      name="name"
                      value={name}
                      onChange={handleChangeName}
                    >
                      <TextField 
                        required
                        id="outlined-basic" 
                        label="กรุณากรอกชื่อ" 
                        variant="outlined"
                        defaultValue="กิจกรรม"
                        />
                    </Box>


                  {/* กรอกข้อความรายละเอียด */}
                  <Typography 
                      variant="body1" 
                      sx={{ fontSize:20 }}>
                      รายละเอียดกิจกรรม
                  </Typography>
                  <Box
                    component="form"
                    sx={{ m: 1, width: 'auto' }}
                    
                    autoComplete="off"
                  >
                    <TextField
                      id="description"
                      fullWidth
                      label="กรุณากรอกรายละเอียด" 
                      variant="outlined"
                      name="description"
                      value={description}
                      onChange={handleChangeDescription} />
                  </Box>

                  {/* ระบุจำนวนคน */}
                  <Typography 
                      variant="body1" 
                      sx={{ fontSize:20 }}>
                      จำนวนผู้เข้าร่วมสูงสุด
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      m: 1,
                    }}
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="filled-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="max_participant"
                        value={max_participant}
                        onChange={handleChangeMax_participant}
                      /> 
                    </div>
                  </Box>


                  {/* ระบุประเภท */}
                  <Typography 
                      variant="body1" 
                      sx={{ fontSize:20 }}>
                      ประเภทกิจกรรม
                  </Typography>
                  <Typography 
                    variant="body3"
                    color="#949494"
                    sx={{ fontSize:15 }}>
                    กิจกรรมประเภท First come first serve ให้ใส่ FCFS <br/>
                    กิจกรรมประเภท Candidate ให้ใส่ C
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="activity-type"
                        label="FCFS or C"
                        name="activity_type"
                        value={activity_type}
                        onChange={handleChangeActivity_type}
                      />
                    </div>
                  </Box>
                  

                  {/* กำหนดเวลา */}
                  <Typography 
                    variant="body1" 
                    sx={{ fontSize:20, mb:1 }}>
                    ระยะเวลาเปิดลงทะเบียน
                  </Typography>
                  
                  <Box sx={{ mb:2 }}>
                    <Box sx={{ ml:1, mb:1 }}>
                      <Typography 
                        variant="body2"
                        color="#949494"
                        sx={{ fontSize:15 }}>
                        เริ่ม
                      </Typography>
                      
                      <TextField
                        id="regis-time-start-date"
                        type="number"
                        label="ํDATE : dd"
                        onChange={handleChangeRegis_time_start_date}
                        />
                      <TextField
                        id="regis-time-start-month"
                        type="number"
                        label="MONTH : MM" 
                        onChange={handleChangeRegis_time_start_month}
                        />
                      <TextField
                        id="regis-time-start-year"
                        type="number"
                        label="YEAR : yyyy"
                        onChange={handleChangeRegis_time_start_year}
                        />
                    </Box>
                    <Box sx={{ ml:1, mb:2 }}>
                      <TextField
                        id="regis-time-start-hour"
                        type="number"
                        label="ํHOUR : hh" 
                        onChange={handleChangeRegis_time_start_hour}
                        />
                      <TextField
                        id="regis-time-start-minute"
                        type="number"
                        label="ํMINUTE : mm" 
                        onChange={handleChangeRegis_time_start_minute}
                        />
                    </Box>
                    <Box sx={{ ml:1, mb:1 }}>
                      <Typography 
                        variant="body2"
                        color="#949494"
                        sx={{ fontSize:15 }}>
                        สิ้นสุด
                      </Typography>
                      
                      <TextField
                        id="regis-time-end-date"
                        type="number"
                        label="ํDATE : dd" 
                        onChange={handleChangeRegis_time_end_date}
                        />
                      <TextField
                        id="regis-time-end-month"
                        type="number"
                        label="MONTH : MM" 
                        onChange={handleChangeRegis_time_end_month}
                        />
                      <TextField
                        id="regis-time-end-year"
                        type="number"
                        label="YEAR : yyyy"
                        onChange={handleChangeRegis_time_end_year}
                        />
                    </Box>
                    <Box sx={{ ml:1, mb:1 }}>
                      <TextField
                        id="regis-time-end-hour"
                        type="number"
                        label="ํHOUR : hh" 
                        onChange={handleChangeRegis_time_end_hour}
                        />
                      <TextField
                        id="regis-time-end-minute"
                        type="number"
                        label="ํMINUTE : mm"
                        onChange={handleChangeRegis_time_end_minute}
                        />
                    </Box>
                  </Box>

                  <Typography 
                    variant="body1" 
                    sx={{ fontSize:20, mb:1 }}>
                    ระยะเวลากิจกรรม
                  </Typography>

                  <Box sx={{ mb:2 }}>
                    <Box sx={{ ml:1, mb:1 }}>
                      <Typography 
                        variant="body2"
                        color="#949494"
                        sx={{ fontSize:15 }}>
                        เริ่ม
                      </Typography>
                      
                      <TextField
                        id="activity-time-start-date"
                        type="number"
                        label="ํDATE : dd" 
                        onChange={handleChangeActivity_time_start_date}
                        />
                      <TextField
                        id="activity-time-start-month"
                        type="number"
                        label="MONTH : MM" 
                        onChange={handleChangeActivity_time_start_month}
                        />
                      <TextField
                        id="activity-time-start-year"
                        type="number"
                        label="YEAR : yyyy"
                        onChange={handleChangeActivity_time_start_year}
                        />
                    </Box>
                    <Box sx={{ ml:1, mb:2 }}>
                      <TextField
                        id="activity-time-start-hour"
                        type="number"
                        label="ํHOUR : hh" 
                        onChange={handleChangeActivity_time_start_hour}
                        />
                      <TextField
                        id="activity-time-start-minute"
                        type="number"
                        label="ํMINUTE : mm" 
                        onChange={handleChangeActivity_time_start_minute}
                        />
                    </Box>
                    <Box sx={{ ml:1, mb:1 }}>
                      <Typography 
                        variant="body2"
                        color="#949494"
                        sx={{ fontSize:15 }}>
                        สิ้นสุด
                      </Typography>
                      
                      <TextField
                        id="activity-time-end-date"
                        type="number"
                        label="ํDATE : dd" 
                        onChange={handleChangeActivity_time_end_date}
                        />
                      <TextField
                        id="activity-time-end-month"
                        type="number"
                        label="MONTH : MM" 
                        onChange={handleChangeActivity_time_end_month}
                        />
                      <TextField
                        id="activity-time-end-year"
                        type="number"
                        label="YEAR : yyyy"
                        onChange={handleChangeActivity_time_end_year}
                        />
                    </Box>
                    <Box sx={{ ml:1, mb:1 }}>
                      <TextField
                        id="activity-time-end-hour"
                        type="number"
                        label="ํHOUR : hh" 
                        onChange={handleChangeActivity_time_end_hour}
                        />
                      <TextField
                        id="activity-time-end-minute"
                        type="number"
                        label="ํMINUTE : mm" 
                        onChange={handleChangeActivity_time_end_minute}
                        />
                    </Box>
                  </Box>


                  {/* คำเตือน */}
                  <Typography variant="h6" color='error.main' sx={{ fontSize:16 }}>
                    กรุณาตรวจสอบข้อมูลที่กรอกให้ถูกต้องก่อนทำการบันทึก เนื่องจากบันทึกเเล้วไม่สามารถเเก้ไขได้
                    <br />
                    หากเกิดข้อผิดพลาด เเอดมินจะทำการลบกิจกรรมได้ที่หน้า รายชื่อกิจกรรม
                  </Typography>
                  </CardContent>

                  {/* ปุ่มบันทึกและป็อปอัพ */}
                  <CardActions>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <label htmlFor="contained-button-file">
                          <Input 
                            accept="image/*" 
                            id="contained-button-file" 
                            multiple type="file"
                            name="image"
                            src={image}
                            onChange={handleChangeImage}
                          />
                          <Button variant="contained" component="span">
                            Upload 📸
                          </Button>
                        </label>
                      </Stack>              

                      <Stack spacing={2} direction="row">               
                        <Button 
                          variant="contained" 
                          color="success"
                          name="save_button"
                          onClick={CreateAdminInfo}>
                            บันทึก
                        </Button>
                        {/* <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                          maxWidth= 'md'
                        >
                          <DialogTitle id="alert-dialog-title" gutterBottom variant="h1" sx={{color: '#4aad00'}}>
                            <Typography sx={{ fontFamily:"Sarabun",fontSize: '50px'}} >
                              <h1>มีบางอย่างผิดพลาด</h1>
                            </Typography>
                          </DialogTitle>
                          <DialogActions >
                            <Button sx={{ fontSize: '30px',color: '#4aad00'}} onClick={handleClose} >ย้อนกลับ </Button>
                          </DialogActions>
                        </Dialog> */}
                      </Stack>
                  </CardActions>
              </Box>
        </Card>
      </Box>
    </div>

  );
}

export default CreateActivity;