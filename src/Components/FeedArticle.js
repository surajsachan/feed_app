import React from "react";

function FeedArticle({ data }) {
  return (
    <div className="feed">
      <h1 className="feed__title">{data.event_name}</h1>
      <h4 className="feed__date">{data.event_date}</h4>
      <img className="feed__image" src={data.thumbnail_image}></img>
      <div className="other_data">
        <span>Views: {data.views}</span>
        <span>Likes: {data.likes}</span>
        <span>Shares: {data.shares}</span>
      </div>
    </div>
  );
}

export default FeedArticle;