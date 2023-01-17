import { Card, CardMedia, Paper, Typography, Box, Button } from '@mui/material';
import React from 'react';

import { useNavigate } from 'react-router-dom';

const Content: React.FC = () => {
  let navigate = useNavigate()
  
  return (
    <>
    <Card>
      <CardMedia
        component="img"
        height="245"
        image="https://www.nasaspaceflight.com/wp-content/uploads/2023/01/webb-aas-article-fina-1170x658.png"
        alt="picture"
      />
    </Card>
      <Box sx={{ position: "absolute", top: 150, left: 75, right: 75 }}>
      <Paper sx={{ p: "35px 75px 50px"}}>
        <Typography variant="h5" component="div" sx={{textAlign: "center"}}>
            {}
        </Typography>
        <Typography variant="body2" component="div" color="text.secondary">
            {}
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