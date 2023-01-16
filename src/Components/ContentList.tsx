import React, { useEffect, useState } from 'react';
import { News } from '../types';
import ContentCard from './ContentCard';

const ContentList: React.FC = () => {
  const [newsData, setNewsData] = useState<News[]>([])

  function getDataNews() {
    return fetch("https://api.spaceflightnewsapi.net/v3/articles/?_limit=100")
      .then((response) => response.json())
      .then((json) => setNewsData(json) );
  }

  useEffect(() => {
    getDataNews()
  }, [])

  return (
    <div className='main' style={{ display: "flex", flexWrap: "wrap", gap: 45, marginTop: 45 }}>
      {newsData.map((news:News) => {
        return (<ContentCard key={news.id} {...news} />)
      })}
    </div>
  );
}

export default ContentList;