import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


export const FeedContext = createContext();

export const FeedContextProvider = (props) => {
  const [data, setData] = useState();
  const {apiKey} = props;

  useEffect(() => {
    axios
      .get(
        

          `http://www.mocky.io/v2/${apiKey}`
        
        
        
        // `http://newsapi.org/v2/everything?q=rich&from=2020-07-19&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <FeedContext.Provider value={{ data }}>
      {props.children}
    </FeedContext.Provider>
  );
};