import React from "react";
import { useSelector } from "react-redux";

export const ShowNews = () => {
  const news = useSelector((state) => state.news);

  return (
    <div>
      {Object.keys(news).length !== 0 ? (
        <div>
          {news.map((item, index) => {
            return (
              <div key={index}>
                <h2>Title: {item.abstract}</h2>
                <h3>Section: {item.section_name}</h3>
                <a target="blank" href={item.web_url}>
                  Oficial Page
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};
