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

  let resaltNewsArray
  if (searchText) {
    const arrByTitle = news.filter((news) => news.title.includes(searchText))
    const arrBySummary = news.filter((news) => !news.title.includes(searchText) && news.summary.includes(searchText))
    resaltNewsArray = arrByTitle.concat(arrBySummary)
  }



  function getDataNews() {
    return fetch("https://api.spaceflightnewsapi.net/v3/articles/?_limit=100")
      .then((response) => response.json())
      .then((json) => dispatch(fetchAllNews(json)) );
  }

  useEffect(() => {
    getDataNews()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='main' style={{ display: "flex", flexWrap: "wrap", gap: 45, marginTop: 45 }}>
      {resaltNewsArray ?
        resaltNewsArray.map((news: News) => {
          return (<ContentCard key={news.id} {...news} />)
        }) :
        news.map((news: News) => {
          return (<ContentCard key={news.id} {...news} />)
        })
      }
    </div>
  );
}

export default ContentList;