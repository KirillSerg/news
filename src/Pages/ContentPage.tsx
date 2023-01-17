import React from 'react';
import {useParams} from 'react-router-dom'
import { useAppSelector } from '../redux/hooks';
import { Box } from '@mui/material';
import Content from '../components/Content';
import { News } from '../types';

const ContentPage: React.FC = () => {
  const match = useParams();
  const newsId = match.id || "";

  const { news } = useAppSelector((state) => state.newsReducer)

  const currentNewsById = news.filter((news: News) =>  news.id.toString() === newsId )[0]

  return (
    <Box sx={{position: "relative"}}>
      <Content {...currentNewsById} />
    </Box>
  );
}

export default ContentPage;