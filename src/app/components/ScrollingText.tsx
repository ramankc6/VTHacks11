"use client";

import React from "react";
import { Row } from "react-bootstrap";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["SCIENCE", "ECONOMICS", "ALGEBRA", "SPANISH"];

export function ScrollingText() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Row>
      <h1>TEACH ME ABOUT</h1>
      <h1>
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h1>
    </Row>
  );
}
