import React from "react";
import { useSelector } from "react-redux";
import { Loading } from "../../utils/loading/Loading";
import "./showNews.sass";

export const ShowNews = () => {
  const news = useSelector((state) => state.news);

  return (
    <div>
      {Object.keys(news).length !== 0 ? (
        <div className="news">
          {news.map((item, index) => {
            return (
              <div key={index} className="news__item">
                <h2>{item.abstract || "Not date"} </h2>
                <h3>Section: {item.section_name || "Not date"}</h3>
                <a target="blank" href={item.web_url || "Not date"}>
                  Go to the official page
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
