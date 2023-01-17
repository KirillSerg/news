import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, Paper, Typography, Box, Button } from '@mui/material';
import { News } from '../types';


const Content: React.FC<News> = ({imageUrl, title, summary}) => {

  let navigate = useNavigate()
  
  return (
    <>
    <Card>
      <CardMedia
        component="img"
        height="245"
        image={imageUrl}
        alt="picture"
      />
    </Card>
    <Box sx={{ position: "absolute", top: 150, left: 75, right: 75 }}>
      <Paper sx={{ p: "35px 75px 50px"}}>
        <Typography variant="h5" component="div" sx={{textAlign: "center", pb: "50px"}}>
            {title}
        </Typography>
        <Typography variant="body2" component="div" color="text.secondary">
            {summary}
        </Typography>
      </Paper>
      <Button  onClick={()=>{navigate("/")}} size="small" sx={{ color: "#363636", mt: "35px", ml: "93px", textTransform: 'none' }}>
        &#8592; Back to homepage
      </Button>
    </Box>
  </>
  );
}

export default Content;