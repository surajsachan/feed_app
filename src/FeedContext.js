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
        
      )
      .then((response) => setData(response.data))
      .catch((error) => {
        console.log(error)
      });
  }, [apiKey]);

  return (
    <FeedContext.Provider value={{ data }}>
      {props.children}
    </FeedContext.Provider>
  );
};
