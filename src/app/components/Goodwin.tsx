import * as THREE from "three";
import { useEffect } from "react";
import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function Goodwin(props: JSX.IntrinsicElements["group"]) {
  const { scene } = useThree();

  const texture = useTexture("/goodwin.jpg");

  useEffect(() => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.format = THREE.RGBAFormat;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    scene.background = texture;
  }, [texture]);

  return null;
}
