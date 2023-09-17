"use client";
import { TexturePainter } from "@/app/mask-painter";
import { UploadButton } from "./UploadButton";
import { useEffect, useMemo, useRef, useState } from "react";
import { lerp } from "three/src/math/MathUtils.js";
import * as THREE from "three";
import { FakeCanvas } from "./FakeCanvas";
import { Canvas } from "@react-three/fiber";

export default function FormPage(props: { opacity: number }) {
  const [imageURI, setImageURI] = useState<string>();
  const [topic, setTopic] = useState<string>();
  const [texture, setTexture] = useState<THREE.Texture>();

  useEffect(() => {
    if (imageURI) {
      new THREE.TextureLoader().load(imageURI, (texture) => {
        setTexture(texture);
      });
    }
  }, [imageURI]);

  const drawingPoints = useMemo(() => {
    if (texture) {
      return new Uint8Array(texture.image.width * texture.image.height * 4);
    }
  }, [texture]);

  const [gl, setGl] = useState<THREE.WebGLRenderer>();

  const canvas = useRef<HTMLCanvasElement>(null);

  return (
    <>
      <Canvas ref={canvas}>
        <FakeCanvas gl={gl} setGl={setGl} texture={texture} />
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: props.opacity,
          pointerEvents: props.opacity > 0.96 ? "all" : "none",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(3px)",
          maxWidth: texture ? undefined : "30%",
          minWidth: "30%",
          minHeight: "75%",
          maxHeight: texture ? undefined : "75%",
          fontSize: "48px",
          fontFamily: "Storytime",
          textAlign: "left",
          overflow: "scroll",
          overflowX: "scroll",
        }}
      >
        <div style={{ display: "flex" }}>
          <h1>Teach Me About:</h1>
          <input
            type="text"
            style={{
              marginLeft: "12px",
              marginBottom: "24px",
              marginTop: "24px",
            }}
            className="text-slate-500 p-1 text-sm rounded"
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <h1>Upload the Protagonist:</h1>
            <UploadButton
              onUpload={(uri: string) => {
                setImageURI(uri);
              }}
            />
          </div>
          {imageURI && texture && drawingPoints ? (
            <>
              <TexturePainter
                outputBuffer={drawingPoints}
                formOpacity={props.opacity}
                texture={texture}
              />
              <button
                disabled={
                  false && (topic?.length === 0 || imageURI?.length === 0)
                }
                onClick={async () => {
                  if (canvas) {
                    const blob = await new Promise<Blob>((resolve, reject) =>
                      canvas.current?.toBlob((bloc) => {
                        if (bloc) {
                          resolve(bloc);
                        } else {
                          reject();
                        }
                      })
                    );
                    const url = URL.createObjectURL(blob);
                  }
                  window.location.href = "pages/result";
                }}
              >
                Submit Thingy
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
