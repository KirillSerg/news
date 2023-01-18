import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Marker } from "react-mark.js";
import React from 'react';
import { News } from '../types';
import { useAppSelector } from '../redux/hooks';

const ContentCard: React.FC<News> = ({ imageUrl, publishedAt, title, summary, id }) => {
  
  const { searchText } = useAppSelector((state) => state.searchTxtReducer)

  return (
    <Card sx={{ maxWidth: 400, minHeight: 530}}>
      <CardMedia
        component="img"
        height="217"
        image={imageUrl}
        alt="picture"
      />
      <CardContent sx={{ height: 313, p: "25px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        <Typography variant="subtitle2" component="div" sx={{opacity: "0.6"}}>
          {publishedAt}
        </Typography>
        <Marker mark={searchText}>
          <Typography variant="h5" component="div" sx={{ height: 58, overflow: "hidden", textOverflow: "ellipsis" }}>
            {title}
          </Typography>
        </Marker>
        <Marker mark={searchText}>
          <Typography variant="body2" component="div" color="text.secondary" sx={{ height: 96, overflow: "hidden", textOverflow: "ellipsis" }}>
            {summary}
          </Typography>
        </Marker>
        <Link to={`/content/${id}`} style={{textDecoration:"none", color: "#363636"}}>
          Read more &#8594;
        </Link>
      </CardContent>
    </Card>
  );
}

export default ContentCard;