import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Trade({ scrollState, width, active, price, connected = false }) {
  const [sidebar, setSidebar] = useState();
  const [selected, setSelected] = useState();
  return (
    <>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <Sidebar
        width={width}
        scrollState={scrollState}
        active={active}
        sidebar={sidebar}
        setSidebar={setSidebar}
        price={price}
      />
      <main
        style={{
          background: "#eee",
          padding: `74px 20px`,
          paddingLeft: sidebar ? 270 : width < 960 ? 20 : 90,
          height: "100vh",
          transition: "0.3s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 180,
            background: "white",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: 20,
            fontWeight: 700,
          }}
        >
          <Link to="exchange" style={{ textDecoration: "none" }}>
            <span
              className="link"
              style={{
                background: active == "exchange" && "rgb(91, 90, 153)",
                padding: "5px 20px",
                borderRadius: 20,
                color: active == "exchange" ? "white" : "rgb(91, 90, 153)",
              }}
            >
              Swap
            </span>
          </Link>
          <Link to="/liquidity" style={{ textDecoration: "none" }}>
            <span
              className="link"
              style={{
                background: active == "liquidity" && "rgb(91, 90, 153)",
                padding: "5px 20px",
                borderRadius: 20,
                color: active == "liquidity" ? "white" : "rgb(91, 90, 153)",
              }}
            >
              Liquidity
            </span>
          </Link>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: 20,
            margin: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div //header
            style={{
              width: 350,
              margin: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderBottom: "2px solid #ccc",
            }}
          >
            <span
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "rgb(91, 90, 153)",
              }}
            >
              {active == "exchange" ? "Exchange" : "Your Liquidity"}
            </span>
            <span
              style={{
                color: "rgb(91, 90, 153)",
              }}
            >
              {active == "exchange"
                ? "Trade tokens instant"
                : "Remove liquidity to receive tokens back"}
            </span>
          </div>

          {active == "exchange" ? (
            // exc
            <>
              <div //content
                style={{
                  width: 350,
                  boxSizing: "border-box",
                  padding: 10,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src="assets/set.png"
                  className="ico"
                  alt=""
                  style={{
                    background: "#cecece",
                    alignSelf: "flex-end",
                    borderRadius: 5,
                  }}
                />
                <div
                  style={{
                    width: "100%",
                    margin: "10px 0",
                    boxSizing: "border-box",
                    padding: 10,
                    borderRadius: 15,
                    background: "rgb(229, 229, 229)",
                    color: "rgb(91, 90, 153)",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontSize: 14 }}>From</span>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <input
                      style={{
                        border: "none",
                        background: "transparent",
                        color: "rgb(91, 90, 153)",
                        fontWeight: 600,
                        width: 190,
                      }}
                      type="number"
                      placeholder="0.0"
                    />
                    <div>
                      <img
                        className="ico"
                        src="assets/logo.png"
                        alt=""
                        style={{ transform: "rotate(90deg)" }}
                      />
                      <span>Matic</span>
                      <img
                        className="ico"
                        src="assets/right.png"
                        alt=""
                        style={{ transform: "rotate(90deg)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="assets/transaction.png"
                alt=""
                style={{
                  width: 30,
                  alignSelf: "center",
                }}
              />
              <div //content
                style={{
                  width: 350,
                  boxSizing: "border-box",
                  padding: 10,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    margin: "10px 0",
                    boxSizing: "border-box",
                    padding: 10,
                    borderRadius: 15,
                    background: "rgb(229, 229, 229)",
                    color: "rgb(91, 90, 153)",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontSize: 14 }}>To</span>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <input
                      style={{
                        border: "none",
                        background: "transparent",
                        color: "rgb(91, 90, 153)",
                        fontWeight: 600,
                        width: 190,
                      }}
                      type="number"
                      placeholder="0.0"
                    />
                    <div>
                      <img
                        className="ico"
                        src="assets/logo.png"
                        alt=""
                        style={{ transform: "rotate(90deg)" }}
                      />
                      <span>Matic</span>
                      <img
                        className="ico"
                        src="assets/right.png"
                        alt=""
                        style={{ transform: "rotate(90deg)" }}
                      />
                    </div>
                  </div>
                </div>
                <button className="btn_l">Connect Wallet</button>
              </div>
            </>
          ) : (
            // liq
            <>
              {connected ? (
                <>
                  <div //content
                    style={{
                      width: 350,
                      boxSizing: "border-box",
                      padding: 10,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src="assets/set.png"
                      className="ico"
                      alt=""
                      style={{
                        background: "#cecece",
                        alignSelf: "flex-end",
                        borderRadius: 5,
                      }}
                    />
                    <div
                      style={{
                        width: "100%",
                        margin: "10px 0",
                        boxSizing: "border-box",
                        padding: 10,
                        borderRadius: 15,
                        background: "rgb(229, 229, 229)",
                        color: "rgb(91, 90, 153)",
                        fontWeight: 600,
                      }}
                    >
                      <span style={{ fontSize: 14 }}>From</span>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <input
                          style={{
                            border: "none",
                            background: "transparent",
                            color: "rgb(91, 90, 153)",
                            fontWeight: 600,
                            width: 190,
                          }}
                          type="number"
                          placeholder="0.0"
                        />
                        <div>
                          <img
                            className="ico"
                            src="assets/logo.png"
                            alt=""
                            style={{ transform: "rotate(90deg)" }}
                          />
                          <span>Matic</span>
                          <img
                            className="ico"
                            src="assets/right.png"
                            alt=""
                            style={{ transform: "rotate(90deg)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src="assets/transaction.png"
                    alt=""
                    style={{
                      width: 30,
                      alignSelf: "center",
                    }}
                  />
                  <div //content
                    style={{
                      width: 350,
                      boxSizing: "border-box",
                      padding: 10,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        margin: "10px 0",
                        boxSizing: "border-box",
                        padding: 10,
                        borderRadius: 15,
                        background: "rgb(229, 229, 229)",
                        color: "rgb(91, 90, 153)",
                        fontWeight: 600,
                      }}
                    >
                      <span style={{ fontSize: 14 }}>To</span>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <input
                          style={{
                            border: "none",
                            background: "transparent",
                            color: "rgb(91, 90, 153)",
                            fontWeight: 600,
                            width: 190,
                          }}
                          type="number"
                          placeholder="0.0"
                        />
                        <div>
                          <img
                            className="ico"
                            src="assets/logo.png"
                            alt=""
                            style={{ transform: "rotate(90deg)" }}
                          />
                          <span>Matic</span>
                          <img
                            className="ico"
                            src="assets/right.png"
                            alt=""
                            style={{ transform: "rotate(90deg)" }}
                          />
                        </div>
                      </div>
                    </div>
                    <button className="btn_l">Connect Wallet</button>
                  </div>
                </>
              ) : (
                <>
                  <div //content
                    style={{
                      width: 350,
                      boxSizing: "border-box",
                      padding: 10,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        height: 100,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "rgb(91, 90, 153)",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      Connect to a wallet to view your liquidity.
                    </div>
                    <button className="btn_l">Connect Wallet</button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default Trade;
