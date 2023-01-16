import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import  {News}  from '../types';

const ContentCard: React.FC<News> = ({imageUrl, publishedAt, title, summary, id}) => {
  return (
    <Card sx={{ maxWidth: 400, minHeight: 530}}>
      <Link to={`/content/${id}`} style={{textDecoration:"none", color: "#363636"}}>
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
          <Typography variant="h5" component="div" sx={{ height: 58, overflow: "hidden", textOverflow: "ellipsis" }}>
            {title}
          </Typography>
          <Typography variant="body2" component="div" color="text.secondary" sx={{ height: 96, overflow: "hidden", textOverflow: "ellipsis" }}>
            {summary}
          </Typography>
        </CardContent>
      </Link>
      <Link to={`/content/${id}`}>
        Read more &#8594;
      </Link>
    </Card>
  );
}

export default ContentCard;