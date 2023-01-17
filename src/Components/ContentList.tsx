import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { newsSlice } from '../redux/reducers/newsSlice';
import { News } from '../types';
import ContentCard from './ContentCard';

const ContentList: React.FC = () => {

  const {fetchAllNews} = newsSlice.actions
  const { news } = useAppSelector((state) => state.newsReducer)
  const dispatch = useAppDispatch()

  function getDataNews() {
    return fetch("https://api.spaceflightnewsapi.net/v3/articles/?_limit=100")
      .then((response) => response.json())
      .then((json) => dispatch(fetchAllNews(json)) );
  }

  useEffect(() => {
    getDataNews()
  }, [])
// console.log(newsData)
  return (
    <div className='main' style={{ display: "flex", flexWrap: "wrap", gap: 45, marginTop: 45 }}>
      {news.map((news:News) => {
        return (<ContentCard key={news.id} {...news} />)
      })}
    </div>
  );
}

export default ContentList;