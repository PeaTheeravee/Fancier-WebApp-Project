import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Box } from '@mui/material';

function HistoryCard() {

    const [activitycards, setActivitycards] = useState([])

    const getActivityCards = async() => {
        const response = await axios.get('http://localhost:8000/api/activities')
        setActivitycards(response.data)
    }

    useEffect(() => {
        getActivityCards();
    },[]);

    return (
        <Box sx={{ maxWidth: 'auto', maxHeight: 'auto', display: "flex", mx: 2, mb: 10}}>
            {activitycards.map((activitycard) => (
                <Card sx={{ mx: 2, my: 2, maxWidth: 320,  }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={activitycard.image}
                            alt="his"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {activitycard.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                จัดขึ้นวันที่ {activitycard.activity_time_start}<br/>
                                จบวันที่ {activitycard.activity_time_end}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                ))
            }
        </Box>
    );
}

export default HistoryCard;