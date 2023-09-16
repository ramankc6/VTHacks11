import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import * as THREE from "three";

export function Loader(): JSX.Element {
  const { progress } = useProgress();

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

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
