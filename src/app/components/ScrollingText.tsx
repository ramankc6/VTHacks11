"use client";

import React from "react";
import TextTransition, { presets } from "react-text-transition";
import { RoughNotation } from "react-rough-notation";

const TEXTS = ["SCIENCE", "ECONOMICS", "ALGEBRA", "SPANISH"];

export function ScrollingText() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      className="title"
      style={{
        fontSize: "48px",
        fontFamily: "Storytime",
        textAlign: "left",
        display: "flex",
        position: "absolute",
        left: "50%",
        pointerEvents: "none",
        transform: "translateX(-50%)",
        top: "10%",
      }}
    >
      <RoughNotation type={"underline"} strokeWidth={5} show={index >= 1}>
        <h1>TEACH ME ABOUT</h1>
      </RoughNotation>
      <div style={{ width: "32px" }} />
      <RoughNotation type={"box"} show={true}>
        <div style={{ width: "210px" }}>
          <TextTransition delay={2.2} springConfig={presets.stiff}>
            <h1
              style={{
                paddingLeft: (index / 2) % TEXTS.length === 1 ? "8px" : "34px",
              }}
            >
              {TEXTS[(index / 2) % TEXTS.length]}
            </h1>
          </TextTransition>
        </div>
      </RoughNotation>
    </div>
  );
}
