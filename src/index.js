import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useDarkMode } from './hooks/useDarkMode'
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import TrendingCoin from './components/TrendingCoin';
import Styled from 'styled-components';
import "./styles.scss";
import { BrowserRouter as Router, Route } from 'react-router-dom'



const StyledTrendingSection = Styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-top: 3%;
`


const initialValues = {
  darkOn: false
}

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode(initialValues);
  const [trending, setTrending] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/search/trending')
      .then(res => {
        setTrending(res.data.coins)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Router>
      <Route exact path='/' component={() => {
        return (
          <div className={darkMode ? "dark-mode App" : "App"}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Charts coinData={coinData} />
          </div>
        )
      }} />
      <Route path='/trending' component={() => {
        return (
          <>
            <div className={darkMode ? "dark-mode App" : "App"}>
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>  
            <StyledTrendingSection>
              {trending.map(trend => <TrendingCoin trend={trend.item} />)}
            </StyledTrendingSection>
          </>
        )
      }} />
      
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
