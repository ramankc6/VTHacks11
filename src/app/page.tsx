"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Forest } from "./components/Forest";
import { Goodwin } from "./components/Goodwin";
import { MainPage } from "./components/Main";

export default function Home() {
  const [opacity, setOpacity] = useState(1.0);
  const [formOpacity, setFormOpacity] = useState(0.0);
  const [forestVisible, setForestVisible] = useState(true);
  return (
    <>
      <Canvas camera={{ far: 1200 }}>
        <ambientLight intensity={0.5} />
        <directionalLight />
        <Forest
          setFormOpacity={setFormOpacity}
          formOpacity={formOpacity}
          setForestVisible={setForestVisible}
          setOpacity={setOpacity}
          opacity={opacity}
          visible={forestVisible}
        />
        <Goodwin />
      </Canvas>
      <MainPage opacity={opacity} formOpacity={formOpacity} />
    </>
  );
}
