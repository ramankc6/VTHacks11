"use client";

import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Forest } from "./components/Forest";
import { Desk } from "./components/Desk";
import { Loader } from "./components/Loader";
import { MainPage } from "./components/Main";

export default function Home() {
  const [opacity, setOpacity] = useState(1.0);
  const [forestVisible, setForestVisible] = useState(true);
  return (
    <Suspense fallback={<Loader />}>
      <Canvas camera={{ far: 1200 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 15, 20]} />
        <Forest
          setForestVisible={setForestVisible}
          setOpacity={setOpacity}
          opacity={opacity}
          visible={forestVisible}
        />
        <Desk />
      </Canvas>
      <MainPage opacity={opacity} />
    </Suspense>
  );
}
