import React, { useContext, useState } from "react";
import { FeedContext } from "../FeedContext";
import FeedArticle from "./FeedArticle";

function Feed(props) {
  const { data } = useContext(FeedContext);
  const [selected , setSelected] = useState("event_date")
  console.log(data);

  function compare(a,b) {
    if (a[selected] < b[selected])
       return -1;
    if (a[selected] > b[selected])
      return 1;
    return 0;
  }
  console.log(selected)

  const handleChange = (event) =>{
    setSelected(event.target.value);
  }

  return (
    <div>
      <h1 className="head__text">Feed App 👋</h1>
      <div className="sort">Sort By : 
        <select id={'sortby'} onChange={(event)=>handleChange(event)}>
          <option value="event_date">Date</option>
          <option value="views">Views</option>
          <option value="likes">Likes</option>
          <option value="shares">Shares</option>
        </select>
      </div>
      <div className="all__news">
        {data
          ? data.posts.map((Feed) => (
              <FeedArticle data={Feed} key={Feed.id} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default Feed;