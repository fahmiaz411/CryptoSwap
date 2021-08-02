import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home({ scrollState, width, active, price }) {
  const [sidebar, setSidebar] = useState();
  const responsive = 750;

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
          paddingLeft:
            width > 960 ? (sidebar ? 270 : width < 960 ? 20 : 90) : 20,
          minHeight: "100vh",
          overflow: "hidden",
          transition: "0.3s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 40,
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#E3507A",
              fontSize: 30,
              fontWeight: 900,
            }}
          >
            Crypto
          </span>
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#A9A9A9",
            }}
          >
            The #1 AMM and yield farm on Polygon.
          </span>
        </div>
        {/*  */}

        {/* Sec */}
        <div
          style={{
            display: "flex",
            flexDirection: width < responsive ? "column" : "row",
            margin: "20px 0",
          }}
        >
          {/* Left */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 350,
              margin: 10,
              boxSizing: "border-box",
              padding: "20px 30px",
              background: "white",
              borderRadius: 20,
            }}
          >
            <span
              style={{
                color: "#50E3C2",
                fontSize: 30,
                fontWeight: 600,
              }}
            >
              Farms & Staking
            </span>
            <img
              src="assets/logo.png"
              alt=""
              style={{
                width: 40,
              }}
            />
            <span
              style={{
                color: "#50E3C2",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              CPIE To Harvest
            </span>
            <span
              style={{
                color: "#a9a9a9",
                fontSize: 14,
                fontWeight: 600,
                margin: "30px 0",
              }}
            >
              Locked
            </span>
            <span
              style={{
                color: "#50E3C2",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              CPIE In Wallet
            </span>
            <span
              style={{
                color: "#a9a9a9",
                fontSize: 14,
                fontWeight: 600,
                margin: "30px 0",
              }}
            >
              Locked
            </span>
            <img
              src="assets/logo.png"
              alt=""
              style={{
                position: "absolute",
                opacity: 0.2,
                width: width < 960 ? 170 : 200,
                transform: `translateX(${
                  width < 960 ? "140px" : "110px"
                }) translateY(${width < 960 ? "170px" : "140px"})`,
              }}
            />
            <button
              className="btn_l"
              style={{
                background: "#50E3C2",
                border: "none",
                borderRadius: 15,
                padding: 10,
                color: "white",
                fontWeight: 700,
                boxShadow: "#000 0 1px 2px",
                zIndex: 0,
              }}
            >
              Unlock Wallet
            </button>
          </div>
          {/*  */}

          {/* Right */}
          <div
            style={{
              height: 370,
              margin: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* 1 */}
            <div
              style={{
                display: "flex",
                cursor: "pointer",
                flexDirection: "column",
                width: 350,
                height: "48%",
                boxSizing: "border-box",
                padding: "20px 30px",
                borderRadius: 20,
                background:
                  "linear-gradient(247.99deg, rgba(80, 227, 194, 0.5) 0%, rgba(255, 245, 133, 0.5) 49.23%, rgba(227, 80, 122, 0.5) 98.46%)",
              }}
            >
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "rgb(91, 90, 153)",
                }}
              >
                Earn
              </span>
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "white",
                }}
              >
                CPIE, 100xCoin, LZ...
              </span>
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "rgb(91, 90, 153)",
                }}
              >
                In Pools
              </span>
              <img
                src="assets/right.png"
                alt=""
                style={{
                  width: 30,
                  transform: "translateY(-10px)",
                  alignSelf: "flex-end",
                }}
              />
            </div>
            {/* 2 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 350,
                cursor: "pointer",
                height: "48%",
                boxSizing: "border-box",
                padding: "20px 30px",
                borderRadius: 20,
                background: "white",
              }}
            >
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "rgb(243, 151, 183)",
                }}
              >
                Earn up to
              </span>
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 900,
                  color: "rgb(80, 227, 194)",
                }}
              >
                1,085.66%
              </span>
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "rgb(243, 151, 183)",
                }}
              >
                APR in Farms
              </span>
              <img
                src="assets/right.png"
                alt=""
                style={{
                  width: 30,
                  transform: "translateY(-10px)",
                  alignSelf: "flex-end",
                }}
              />
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
        {/* Banner */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: width < responsive ? 1.5 : 1,
            width: width < responsive ? 350 : 720,
            height: width < responsive ? 170 : 150,
            borderRadius: 20,
            background:
              "linear-gradient(247.99deg, rgb(250, 232, 186) 0%, rgb(80, 227, 194) 98.46%)",
          }}
        >
          <span
            style={{
              fontSize: width < responsive ? 24 : 32,
              fontWeight: 900,
              color: "rgb(91, 90, 153)",
            }}
          >
            How to Buy <span style={{ color: "rgb(227, 80, 122)" }}>$CPIE</span>
          </span>
          <span
            style={{
              fontSize: width < responsive ? 24 : 32,
              fontWeight: 900,
              color: "rgb(91, 90, 153)",
            }}
          >
            with{" "}
            <span style={{ color: "rgb(227, 80, 122)" }}>CremePieSwap</span>
          </span>
          <button
            className="btn_l"
            style={{
              background: "rgb(227, 80, 122)",
              fontSize: 18,
              marginTop: 10,
              padding: "5px 40px",
            }}
          >
            Discover
          </button>
        </div>
        {/*  */}

        {/* Stats */}
        <div
          style={{
            display: "flex",
            flexDirection: width < responsive ? "column" : "row",
            width: width < responsive ? "100%" : 720,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div //1
            style={{
              display: "flex",
              flexDirection: "column",
              width: 350,
              background: "white",
              justifyContent: "center",
              boxSizing: "border-box",
              padding: "20px 30px",
              borderRadius: 20,
              marginTop: 30,
            }}
          >
            <span
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "rgb(169,169,169)",
              }}
            >
              Total Value Locked (TVL)
            </span>
            <span
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: "rgb(169,169,169)",
              }}
            >
              $5,101,871
            </span>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "rgb(169,169,169)",
              }}
            >
              Across all LPs and Cream Pool
            </span>
          </div>
          <div //2
            style={{
              display: "flex",
              flexDirection: "column",
              width: 350,
              background: "white",
              justifyContent: "center",
              boxSizing: "border-box",
              padding: "20px 30px",
              borderRadius: 20,
              marginTop: 30,
            }}
          >
            <span
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: "#50E3C2",
              }}
            >
              CPIE Stats
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 14,
                fontWeight: 700,
                color: "rgb(169,169,169)",
              }}
            >
              <span>Total CPIE Supply</span>
              <span>50,000,000,000</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 14,
                fontWeight: 700,
                color: "rgb(169,169,169)",
              }}
            >
              <span>Total CPIE Burned</span>
              <span>0</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 14,
                fontWeight: 700,
                color: "rgb(169,169,169)",
              }}
            >
              <span>New CPIE per block</span>
              <span>2000</span>
            </div>
          </div>
        </div>
        {/*  */}
      </main>
    </>
  );
}

export default Home;
