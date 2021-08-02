/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function Sidebar({
  sidebar,
  width,
  setSidebar,
  scrollState,
  active = "exchange",
  price,
}) {
  const [trade, setTrade] = useState();

  useEffect(() => {
    if (!sidebar) {
      setTrade(false);
    }
  }, [sidebar]);
  return (
    <>
      <aside
        style={{
          position: "fixed",
          zIndex: 2,
          paddingTop:
            scrollState == "top" ? 74 : scrollState == "bottom" ? 14 : 74,
          display: "flex",
          flexDirection: "column",
          boxShadow: "#ccc 1px 0px 5px",
          width: sidebar ? 250 : width < 960 ? 0 : 70,
          overflow: "hidden",
          height: "100vh",
          background: "#fff",
          color: "white",
          transition: "0.3s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Link to="/" className="link">
              <div
                className="link"
                style={{
                  display: "flex",
                  height: 50,
                  alignItems: "center",
                }}
              >
                {active == "home" && (
                  <div
                    style={{
                      width: 5,
                      height: 50,
                      background: "#89dbc4",
                      position: "absolute",
                    }}
                  />
                )}
                <img
                  className="ico"
                  src="assets/home.png"
                  alt=""
                  style={{ opacity: 1, margin: "0 18px" }}
                />
                <span>Home</span>
              </div>
            </Link>
            <div>
              <div
                onClick={() => {
                  setTrade(!trade);
                  setSidebar(true);
                }}
                className="link"
                style={{
                  display: "flex",
                  height: 50,
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                {active == "trade" && (
                  <div
                    style={{
                      width: 5,
                      height: 50,
                      background: "#89dbc4",
                      position: "absolute",
                    }}
                  />
                )}
                <img
                  className="ico"
                  src="assets/transaction.png"
                  alt=""
                  style={{ opacity: 1, margin: "0 18px" }}
                />
                <span>Trade</span>
              </div>

              <div
                style={{
                  height: trade ? 100 : 0,
                  transition: "0.3s ease",
                  overflow: "hidden",
                }}
              >
                <Link to="/exchange" className="link">
                  <div
                    className="link_s"
                    style={{
                      display: "flex",
                      height: 50,
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    {active == "exchange" && (
                      <>
                        {trade && (
                          <div
                            style={{
                              width: 5,
                              height: 50,
                              background: "#89dbc4",
                              position: "absolute",
                            }}
                          />
                        )}
                      </>
                    )}
                    <span
                      style={{
                        marginLeft: 70,
                      }}
                    >
                      Exchange
                    </span>
                  </div>
                </Link>
                <Link to="/liquidity" className="link">
                  <div
                    className="link_s"
                    style={{
                      display: "flex",
                      height: 50,
                      cursor: "pointer",
                      alignItems: "center",
                    }}
                  >
                    {active == "liquidity" && (
                      <>
                        {trade && (
                          <div
                            style={{
                              width: 5,
                              height: 50,
                              background: "#89dbc4",
                              position: "absolute",
                            }}
                          />
                        )}
                      </>
                    )}
                    <span
                      style={{
                        marginLeft: 70,
                      }}
                    >
                      Liquidity
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <Link to="/farms" className="link">
              <div
                className="link"
                style={{
                  display: "flex",
                  height: 50,
                  alignItems: "center",
                }}
              >
                {active == "farms" && (
                  <div
                    style={{
                      width: 5,
                      height: 50,
                      background: "#89dbc4",
                      position: "absolute",
                    }}
                  />
                )}
                <img
                  className="ico"
                  src="assets/farm.png"
                  alt=""
                  style={{ opacity: 1, margin: "0 18px" }}
                />
                <span>Farms</span>
              </div>
            </Link>
            <Link to="/pools" className="link">
              <div
                className="link"
                style={{
                  display: "flex",
                  height: 50,
                  alignItems: "center",
                }}
              >
                {active == "pools" && (
                  <div
                    style={{
                      width: 5,
                      height: 50,
                      background: "#89dbc4",
                      position: "absolute",
                    }}
                  />
                )}
                <img
                  className="ico"
                  src="assets/pool.png"
                  alt=""
                  style={{ opacity: 1, margin: "0 18px" }}
                />
                <span>Pools</span>
              </div>
            </Link>
          </div>
          <div>
            {sidebar && (
              <Link to="/exchange" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    color: "rgb(110, 163, 170)",
                    fontSize: 16,
                    fontWeight: 700,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  NCIE ${price}
                </div>
              </Link>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                boxSizing: "border-box",
                padding: 20,
              }}
            >
              {!sidebar ? (
                <img //set
                  onClick={() => setSidebar(true)}
                  className="ico"
                  src="assets/set.png"
                  alt=""
                />
              ) : (
                <>
                  {/* sosmed */}

                  <img
                    onClick={() => {
                      window.location.replace("https://facebook.com");
                    }}
                    className="ico"
                    src="assets/facebook.png"
                    alt=""
                  />

                  <img
                    onClick={() => {
                      window.location.replace("https://twitter.com");
                    }}
                    className="ico"
                    src="assets/twitter.png"
                    alt=""
                  />

                  <img
                    onClick={() => {
                      window.location.replace("https://reddit.com");
                    }}
                    className="ico"
                    src="assets/reddit.png"
                    alt=""
                  />

                  <img
                    onClick={() => {
                      window.location.replace("https://telegram.org");
                    }}
                    className="ico"
                    src="assets/telegram.png"
                    alt=""
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
