import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@mui/material';
import React from 'react';

interface ArticleCardProps {
  title: string;
  summary: string;
  imageUrl: string;
  publishedAt: string;
}

const ContentCard: React.FC<ArticleCardProps> = ({...props}) => {
  return (
    <Card sx={{ maxWidth: 400, minHeight: 530}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="subtitle2" component="div">
            {props.publishedAt}
          </Typography>
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.summary}
          </Typography>
          <a href="#">Read more &#8594;</a>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}

export default ContentCard;