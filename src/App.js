/* eslint-disable react-hooks/exhaustive-deps */
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "./pages/Home";
import Trade from "./pages/Trade";
import Farms from "./pages/Farms";
import Pools from "./pages/Pools";

const axios = require("axios").default;

function App() {
  // When Scrolled
  let listener = null;
  const [scrollState, setScrollState] = useState();

  useEffect(() => {
    listener = document.addEventListener("scroll", () => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 64) {
        if (scrollState != "bottom") {
          setScrollState("bottom");
        }
      } else {
        if (scrollState != "top") {
          setScrollState("top");
        }
      }
    });

    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);
  //

  const coin = "ethereumx";

  const [price, setPrice] = useState();

  const getData = () => {
    var options = {
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/${coin}`,
    };

    axios
      .request(options)
      .then((response) => {
        setPrice(response.data.market_data.current_price.usd);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    return;
  }, []);

  const { width, height } = useWindowDimensions();
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              price={price}
              active="home"
              width={width}
              scrollState={scrollState}
            />
          </Route>
          <Route exact path="/exchange">
            <Trade
              price={price}
              active="exchange"
              width={width}
              scrollState={scrollState}
            />
          </Route>
          <Route exact path="/liquidity">
            <Trade
              price={price}
              active="liquidity"
              width={width}
              scrollState={scrollState}
            />
          </Route>
          <Route exact path="/farms">
            <Farms
              price={price}
              active="farms"
              width={width}
              scrollState={scrollState}
            />
          </Route>
          <Route exact path="/pools">
            <Pools
              price={price}
              active="pools"
              width={width}
              scrollState={scrollState}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

function useWindowDimensions() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return {
    width,
    height,
  };
}
