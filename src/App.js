import logo from './logo.svg';
import './App.css';
import {FeedContextProvider} from './FeedContext'
import Feed from './Components/feed'
import React, {useState } from "react";

function App() {
  // const [page, setPage] = useState('1')
  const [apiKey, setApiKey] = useState('59b3f0b0100000e30b236b7e')

  
  return (
    <FeedContextProvider apiKey={apiKey}>
      <Feed />
      <div class="container">                 
              <ul class="pagination">
                <li onClick={()=>setApiKey('59b3f0b0100000e30b236b7e')}>1</li>
                <li onClick={()=>setApiKey('59ac28a9100000ce0bf9c236')}>2</li>
                <li onClick={()=>setApiKey('59ac293b100000d60bf9c239')}>3</li>
              </ul>
          </div>
    </FeedContextProvider>
  );
}

export default App;
