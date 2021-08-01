import React, { useEffect } from "react";
import { useState } from "react";
import List from "../components/List";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Farms({ scrollState, width, active, price }) {
  const [sidebar, setSidebar] = useState();
  const [sDrop, setSDrop] = useState();

  const [list, setList] = useState([
    "Hot",
    "APR",
    "Multiplier",
    "Earned",
    "Liquidity",
  ]);

  const [sort, setSort] = useState(0);

  const [data, setData] = useState([
    {
      name: "CPIE-USDT",
      backpic: "usdt.svg",
      pic: "cpie.svg",
      apr: 1058.32,
      liquidty: 798925,
      multiplier: 0.4,
    },
    {
      name: "CPIE-USDC",
      backpic: "usdc.svg",
      pic: "cpie.svg",
      apr: 1040.33,
      liquidty: 394286,
      multiplier: 0.2,
    },
    {
      name: "CPIE-MATIC",
      backpic: "matic.svg",
      pic: "cpie.svg",
      apr: 1119.99,
      liquidty: 732483,
      multiplier: 0.4,
    },
    {
      name: "MATIC-USDT",
      backpic: "matic.svg",
      pic: "usdt.svg",
      apr: 166.05,
      liquidty: 247025,
      multiplier: 0.02,
    },
  ]);

  const [detail, setDetail] = useState(
    data.map((d, i) => {
      return false;
    })
  );

  console.log(detail);

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
          padding: `64px 0px`,
          paddingLeft: sidebar ? 250 : width < 960 ? 0 : 70,
          minHeight: "100vh",
          transition: "0.3s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(247.99deg, rgb(80, 227, 194) 0%, rgb(111, 108, 153) 98.46%)",
            height: 180,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div //container header
            style={{
              display: "flex",
              width: 1200,
              flexDirection: "column",
              boxSizing: "border-box",
              padding: 20,
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: 48,
                fontWeight: 900,
                color: "white",
              }}
            >
              Farms
            </span>
            <span
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "white",
              }}
            >
              Stake LP Tokens to earn.
            </span>
          </div>
        </div>
        <div //container content
          style={{
            width: width < parseInt(`${sidebar ? 1450 : 1270}`) ? "90%" : 1200,
            background: "",
          }}
        >
          <div //input
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div //sortby
              style={{
                margin: 10,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  marginLeft: 10,
                  fontSize: 12,
                  color: "rgb(91, 90, 153)",
                  fontWeight: 900,
                }}
              >
                SORT BY
              </span>
              <div>
                <div
                  className="inp_d"
                  onClick={() => setSDrop(!sDrop)}
                  style={{
                    border: "1px solid #D7CAEC",
                    height: 45,
                    borderBottom: "1px solid #D7CAEC",
                    borderRadius: `${sDrop ? "20px 20px 0 0" : "20px"}`,
                    transition: "0.3s ease",
                  }}
                >
                  <div>{list[sort]}</div>
                  <img
                    alt=""
                    className="tri_t"
                    src="/assets/tri.png"
                    style={{
                      width: 15,
                      position: "absolute",
                      transform: "translateX(150px) translateY(-20px)",
                    }}
                  />
                </div>

                <div
                  style={{
                    marginTop: 0,
                    position: "absolute",
                    width: 200,
                    zIndex: 1,
                    height: sDrop ? 44 * list.length : 0,
                    overflow: "hidden",
                    transition: "0.3s ease",
                  }}
                >
                  {list.map((l, i) => (
                    <>
                      {i != sort && (
                        <div //1
                          className="inp_d"
                          onClick={() => {
                            setSDrop(!sDrop);
                            setSort(i);
                          }}
                          style={{
                            width: "100%",
                            borderRadius:
                              i == list.length - 1 && "0 0 20px 20px",
                          }}
                        >
                          {l}
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div //search
              style={{
                margin: 10,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  marginLeft: 10,
                  fontSize: 12,
                  color: "rgb(91, 90, 153)",
                  fontWeight: 900,
                }}
              >
                SEARCH
              </span>
              <input
                className="inp_d"
                style={{
                  boxShadow: "rgb(74 74 104 / 30%) 0px 2px 2px -1px inset",
                  borderRadius: 20,
                  border: "none",
                  cursor: "unset",
                  outline: "none",
                }}
                placeholder="Search Farms"
              />
            </div>
          </div>

          <div
            style={{
              borderRadius: 15,
              boxShadow: "#bbb 0px 0px 5px",
            }}
          >
            {data.map((d, i) => (
              <List width={width} d={d} i={i} />
            ))}

            <div //totop
              style={{
                color: "rgb(80, 227, 194)",
                fontWeight: 600,
                height: 50,
                background: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "0 0 15px 15px",
                cursor: "pointer",
              }}
            >
              <span>To Top</span>
              <img
                alt=""
                src="assets/right.png"
                style={{ width: 20, height: 20, transform: "rotate(-90deg)" }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Farms;
