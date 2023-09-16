/*
Model License

Author: Paul (https://sketchfab.com/paul_paul_paul)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-skybox-autumn-forest-3ba29976640c4b26a66d6cea0556b7d6
Title: FREE - SkyBox Autumn Forest
*/

import * as THREE from "three";
import React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sphere__0: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root"]: THREE.MeshStandardMaterial;
  };
};

export function Forest(
  props: JSX.IntrinsicElements["group"] & {
    setOpacity: (opacity: number) => void;
    setDeskVisible: (visible: boolean) => void;
    deskVisible: boolean;
    opacity: number;
    setForestVisible: (visible: boolean) => void;
    setFar: (far: number) => void;
    far: number;
  }
) {
  const { nodes, materials } = useGLTF("/forest.glb") as GLTFResult;

  const { camera } = useThree();

  useFrame(() => {
    const opacity = 1 - camera.position.distanceTo(new THREE.Vector3()) / 35.0;
    if (Math.abs(props.opacity - opacity) > 0.01) {
      props.setOpacity(opacity);
    }
    if (camera.position.distanceTo(new THREE.Vector3()) < 1200) {
      if (props.deskVisible) {
        props.setDeskVisible(false);
        props.setForestVisible(true);
        props.setFar(1200);
      }
    } else {
      if (!props.deskVisible) {
        props.setDeskVisible(true);
        props.setForestVisible(false);
        props.setFar(10000);
      }
    }
  });

  return (
    <>
      <group {...props} dispose={null}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere__0.geometry}
            material={materials["Scene_-_Root"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={50000}
          />
        </group>
      </group>
      <OrbitControls
        autoRotate={camera.position.distanceTo(new THREE.Vector3()) < 1200}
        minDistance={5}
        zoomSpeed={1.5}
        maxDistance={2300}
        enablePan={false}
        enableZoom={true}
        rotateSpeed={0.5}
        autoRotateSpeed={0.5}
      />
    </>
  );
}

useGLTF.preload("/forest.glb");
