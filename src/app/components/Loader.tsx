import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import * as THREE from "three";

export function Loader(): JSX.Element {
  const { progress } = useProgress();

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        color: "white",
      }}
    >
      <p
        style={{
          fontFamily: "Action",
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        {progress.toFixed(2)}% loaded
      </p>
    </div>
  );
}
