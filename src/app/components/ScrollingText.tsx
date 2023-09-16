"use client";

import React from "react";
import TextTransition, { presets } from "react-text-transition";
import Spacer from "./Spacer";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const TEXTS = ["SCIENCE", "ECONOMICS", "ALGEBRA", "SPANISH"];

export function ScrollingText() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      style={{
        fontSize: "48px",
        fontFamily: "Storytime",
        width: "100%",
        height: "100%",
        textAlign: "left",
        display: "flex",
      }}
    >
      <RoughNotation type={"underline"} strokeWidth={5} show={index >= 1}>
        <h1>TEACH ME ABOUT</h1>
      </RoughNotation>
      <Spacer x={1} />
      <RoughNotation type={"box"} show={true}>
        <div style={{ width: "200px" }}>
          <TextTransition springConfig={presets.gentle}>
            <h1>{TEXTS[(index / 2) % TEXTS.length]}</h1>
          </TextTransition>
        </div>
      </RoughNotation>
    </div>
  );
}
