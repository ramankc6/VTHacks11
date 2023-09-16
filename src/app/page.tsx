"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Forest } from "./components/Forest";
import { Desk } from "./components/Desk";
import { Loader } from "./components/Loader";
import { MainPage } from "./components/Main";

export default function Home() {
  const [opacity, setOpacity] = useState(1.0);
  const [deskVisible, setDeskVisible] = useState(true);
  const [forestVisible, setForestVisible] = useState(true);
  const [far, setFar] = useState(1200);
  useEffect(() => {
    if (opacity < 0.999 && opacity > 0.001) {
      setDeskVisible(false);
    }
  }, [opacity]);
  return (
    <Suspense fallback={<Loader />}>
      <Canvas camera={{ far }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 15, 20]} />
        <Forest
          far={far}
          setFar={setFar}
          setForestVisible={setForestVisible}
          setOpacity={setOpacity}
          opacity={opacity}
          setDeskVisible={setDeskVisible}
          deskVisible={deskVisible}
          visible={forestVisible}
        />
        <Desk visible={deskVisible} />
      </Canvas>
      <MainPage opacity={opacity} />
    </Suspense>
  );
}
