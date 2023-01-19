import {Typography, Box} from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { newsSlice } from '../redux/reducers/newsSlice';
import { News } from '../types';
import ContentCard from './ContentCard';

const ContentList: React.FC = () => {

  const {fetchAllNews} = newsSlice.actions
  const dispatch = useAppDispatch()

  const { news } = useAppSelector((state) => state.newsReducer)
  const { searchText } = useAppSelector((state) => state.searchTxtReducer)
  
  const separetSearchText = searchText.split(" ")

  let filteredNewsList = news
  if (searchText) {
    const arrByTitle = news.filter((news) =>
      separetSearchText.find((search) =>
        news.title.split(" ").includes(search) || news.summary.split(" ").includes(search)))
    filteredNewsList = [...arrByTitle]
  }


  function getDataNews() {
    return fetch("https://api.spaceflightnewsapi.net/v3/articles/?_limit=15")
      .then((response) => response.json())
      .then((json) => dispatch(fetchAllNews(json)) );
  }

  useEffect(() => {
    getDataNews()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Typography>Results: {filteredNewsList.length}</Typography>
      <Box style={{ borderTop: "1px solid lightgrey"}}/>
      <div className='main' style={{ display: "flex", flexWrap: "wrap", gap: 45, marginTop: 45 }}>
        {filteredNewsList.map((news: News) => {
          return (<ContentCard key={news.id} {...news} />)
        })}
      </div>
    </>
  );
}

export default ContentList;