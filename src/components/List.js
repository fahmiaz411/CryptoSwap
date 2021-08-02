import React, { useState } from "react";

import { Link } from "react-router-dom";
function List({ d, i, width }) {
  const [detail, setDetail] = useState();

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  console.log(d);

  return (
    <>
      {d && (
        <div //list
          style={{
            borderRadius: 15,
          }}
        >
          <div //main
            onClick={() => {
              setDetail(!detail);
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              background: "white",
              cursor: "pointer",
              boxSizing: "border-box",
              padding: 30,
              borderRadius: i == 0 ? "15px 15px 0 0" : 0,
              borderBottom: "2px solid #ddd",
            }}
          >
            <div //thumb
              style={{
                width: 25,
                height: 25,
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  transform: "translateX(-5px) translateY(-7px)",
                  background: "#aaa",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    background: "white",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    alt=""
                    src={`assets/${d.backpic}`}
                    style={{
                      width: 15,
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  width: 26,
                  height: 26,
                  background: "green",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                }}
              >
                <img
                  alt=""
                  src={`assets/${d.pic}`}
                  style={{
                    width: 25,
                  }}
                />
              </div>
            </div>
            <div //name
              className="txt600"
            >
              {d.name}
            </div>
            <div //earned
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span className="txt12">Earned</span>
              <span
                style={{
                  color: "rgb(189, 194, 196)",
                  fontWeight: 600,
                }}
              >
                0
              </span>
            </div>
            <div //apr
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span className="txt12">APR</span>
              <span
                style={{
                  color: "rgb(80, 227, 194)",
                  fontWeight: 600,
                }}
              >
                {formatter
                  .format(d.apr)
                  .substring(1, d.apr.toString().length + 2)}
                %
              </span>
            </div>
            {width > 960 && (
              <>
                <div //liq
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span className="txt12">Liquidity</span>
                  <span className="txt600">
                    {formatter
                      .format(d.liquidty)
                      .substring(0, d.liquidty.toString().length + 2)}
                  </span>
                </div>
                <div //multip
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span className="txt12">Multiplier</span>
                  <span className="txt600">{d.multiplier}x</span>
                </div>
              </>
            )}
            <div //details
            >
              {width > 960 && (
                <span className="txt600" style={{ color: "rgb(80, 227, 194)" }}>
                  {detail ? "Hide" : "Detail"}
                </span>
              )}
              <img
                alt=""
                src="assets/right.png"
                style={{
                  width: 20,
                  transform: `rotate(${detail ? "-90deg" : "90deg"})`,
                }}
              />
            </div>
          </div>

          <div //drop
            style={{
              display: "flex",
              background: "#eee",
              flexDirection: width < 960 ? "column" : "row",
              padding: detail ? 30 : "0 30px",
              height: detail
                ? width > 960
                  ? 173
                  : width > 600
                  ? 293
                  : 382
                : 0,
              transition: "0.7s ease",
              overflow: "hidden",
            }}
          >
            <div //2
              style={{
                display: "flex",
                flexDirection: width < 600 ? "column" : "row",
                flex: 2,
                order: width > 960 ? 1 : 0,
              }}
            >
              <div //earned
                style={{
                  order: width > 960 ? 2 : 1,
                  display: "flex",
                  flex: 1,
                  margin: width < 600 ? "" : "10px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid black",
                  borderRadius: 15,
                  width: width < 600 ? "100%" : 370,
                  boxSizing: "border-box",
                  padding: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span
                    className="txt600"
                    style={{ color: "rgb(80, 227, 194)", fontSize: 14 }}
                  >
                    NCIE{" "}
                    <span
                      style={{
                        color: "rgb(91, 90, 153)",
                      }}
                    >
                      Earned
                    </span>
                  </span>
                  <span className="txt600" style={{ fontSize: 20 }}>
                    0
                  </span>
                </div>
                <button
                  className="btn_l"
                  style={{
                    height: 40,
                    background: "#ddd",
                    color: "#aaa",
                    cursor: "no-drop",
                  }}
                >
                  Harvest
                </button>
              </div>
              <div //unlock
                style={{
                  order: width > 960 ? 1 : 2,
                  display: "flex",
                  flex: 1,
                  margin: width < 600 ? "" : "10px 20px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    color: "rgb(110, 163, 170)",
                    fontWeight: "600",
                    fontSize: 12,
                  }}
                >
                  START FARMING
                </span>
                <button
                  className="btn_l"
                  style={{
                    width: "100%",
                    padding: 15,
                    borderRadius: 15,
                  }}
                >
                  Unlock Wallet
                </button>
              </div>
            </div>
            {width < 960 && (
              <>
                <div // apr
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span className="txt600">APR</span>
                  <span
                    className="txt600"
                    style={{
                      color: "rgb(80, 227, 194)",
                    }}
                  >
                    {formatter
                      .format(d.apr)
                      .substring(1, d.apr.toString().length + 2)}
                    %
                  </span>
                </div>
                <div // multip
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span className="txt600">Multiplier</span>
                  <span className="txt600">{d.multiplier}x</span>
                </div>
                <div // liq
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span className="txt600">Liquidity</span>
                  <span className="txt600">
                    {formatter
                      .format(d.liquidty)
                      .substring(0, d.liquidty.toString().length + 2)}
                  </span>
                </div>
              </>
            )}
            <div // getview
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "rgb(80, 227, 194)",
                  width: 143,
                }}
              >
                <span>Get CPIE-USDT LP</span>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "rgb(80, 227, 194)",
                  width: 107,
                }}
              >
                <span>View Contract</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default List;
