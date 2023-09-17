import { useFrame, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { TexturePass } from "three/examples/jsm/postprocessing/TexturePass";

export function FakeCanvas(props: {
  texture: THREE.Texture | undefined;
  setGl: (gl: THREE.WebGLRenderer) => void;
  gl: THREE.WebGLRenderer | undefined;
}): null {
  const { gl } = useThree();

  const composer = useMemo(() => {
    if (!gl) {
      props.setGl(gl);
    }
    const effectComposer = new EffectComposer(gl);
    const texturePass = new TexturePass(props.texture);
    effectComposer.addPass(texturePass);
    return effectComposer;
  }, [gl]);

  useFrame(() => {
    gl.clear();
    gl.autoClear = false;
    composer.render();
  });

  return null;
}
