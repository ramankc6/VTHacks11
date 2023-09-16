"use client";

import React from "react";
import { RoughNotation } from "react-rough-notation";

export function Instructions() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 50);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: "70%",
        transform: "translate(-50%, -50%)",
        paddingTop: "8px",
      }}
    >
      <p
        style={{
          fontFamily: "Action",
          textAlign: "center",
          opacity: index / 30,
        }}
      >
        <RoughNotation type="highlight" color={"#FFFF00"} show={index >= 40}>
          Teach Me About
        </RoughNotation>{" "}
        allows you to{" "}
        <RoughNotation type="highlight" color={"#FFFF00"} show={index >= 50}>
          learn any topic
        </RoughNotation>
        , but in the context of a children's story.{" "}
        <RoughNotation type="highlight" color={"#FFFF00"} show={index >= 60}>
          You upload a photo of the
        </RoughNotation>{" "}
        protagonist of your story, and Teach Me About will generate a{" "}
        <RoughNotation type="highlight" color={"#FFFF00"} show={index >= 70}>
          unique narrated comic-strip
        </RoughNotation>{" "}
        to teach you about your topic of choice.
      </p>
    </div>
  );
}
