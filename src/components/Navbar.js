import React, { useState } from "react";

function Navbar({ sidebar, setSidebar }) {
  return (
    <>
      <div
        style={{
          zIndex: 2,
          position: "absolute",
          width: "100%",
          height: 64,
          background: "#fff",
          boxShadow: "#ccc 0 1px 2px",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px",
          alignItems: "center",
        }}
      >
        {/* Bar */}
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            {sidebar ? (
              <img
                onClick={() => setSidebar(!sidebar)}
                src="assets/barActive.png"
                alt=""
                className="ico"
              />
            ) : (
              <img
                onClick={() => setSidebar(!sidebar)}
                src="assets/bar.png"
                alt=""
                className="ico"
              />
            )}
          </div>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            <img
              src="assets/logo.png"
              alt=""
              style={{
                width: 40,
              }}
            />
            <span style={{ color: "rgb(110, 163, 170)" }}>Cryp</span>
            <span
              style={{
                color: "rgb(110, 163, 170)",
              }}
            >
              To
            </span>
          </div>
        </div>
        <div>
          <button
            className="btn_l"
            style={{
              boxShadow: "",
            }}
          >
            Connect
          </button>
        </div>

        {/*  */}
      </div>
    </>
  );
}

export default Navbar;
