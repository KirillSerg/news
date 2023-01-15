import {Card, CardActionArea, CardMedia, CardContent, Typography, Link} from '@mui/material';
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
          height="217"
          image={props.imageUrl}
          alt="picture"
        />
        <CardContent sx={{ height: 313, p: "25px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
          <Typography variant="subtitle2" component="div">
            {props.publishedAt}
          </Typography>
          <Typography variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" component="div" color="text.secondary">
            {props.summary}
          </Typography>
          <Link href="#">Read more &#8594;</Link>
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