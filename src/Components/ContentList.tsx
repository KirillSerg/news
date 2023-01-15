import React, { useEffect, useState } from 'react';
import ContentCard from './ContentCard';

interface News {
  id: 0,
  featured: false,
  title: string,
  url: string,
  imageUrl: string,
  newsSite: string,
  summary: string,
  publishedAt: string,
  launches: [
    {
      id: string,
      provider: string
    }
  ],
  events: [
    {
      id: string,
      provider: string
    }
  ]
}

const ContentList: React.FC = () => {
  const [newsData, setNewsData] = useState([])

  function getDataNews() {
    return fetch("https://api.spaceflightnewsapi.net/v3/articles/?_limit=100")
      .then((response) => response.json())
      .then((json) => setNewsData(json) );
  }

  useEffect(() => {
    getDataNews()
  }, [])

  return (
    <div className='main' style={{ display: "flex" }}>
      {newsData.map((news:News) => {
        return (<ContentCard key={news.id} title={news.title} summary={news.summary} imageUrl={news.imageUrl} publishedAt={news.publishedAt} />)
      })}
    </div>
  );
}

export default ContentList;