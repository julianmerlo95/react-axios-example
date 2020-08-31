import React, { useEffect, useState } from "react";
import {loadImageHandler} from '../../../axios/index';
import {Loading} from '../../utils/loading/Loading'
import "./initialNews.sass";

export const InitialNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadImageHandler(
      `${process.env.REACT_APP_URL_INITIAL_IMAGE}`,
      `?api-key=${process.env.REACT_APP_API_KEY}`
    ).then((response) => {
      setNews(response.results);
    });
  }, []);

  return (
    <div className="news">
      {news && news.length > 0 ? (
        <div className="news__container">
          {news.map((item, index) => {
            return (
              <div className="news__container__item" key={index}>
                <h2>{item.title}</h2>
                <h3>Published Date: {item.published_date || 'Not date'}</h3>
                <h4>Source: {item.source}</h4>
                <a target="blank" href={item.url}>New in New York Time</a>
              </div>
            );
          })}
        </div>
      ) : (
        <Loading/>
      )}
    </div>
  );
};
