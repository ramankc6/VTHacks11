"use client";

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

  // useEffect(() => {
  //   if (imageURI) {
  //     new THREE.TextureLoader().load(imageURI, (texture) => {
  //       setTexture(texture);
  //     });
  //   }
  // }, [imageURI]);

  return (
    <>
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
          minWidth: "37%",
          minHeight: "75%",
          maxHeight: texture ? undefined : "75%",
          fontSize: "48px",
          fontFamily: "Storytime",
          textAlign: "left",
          overflow: "scroll",
          overflowX: "scroll",
          padding: "40px"
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
              width: "250px",
              backgroundColor: "rgba(255,255,255,0.5)",
              outline: "none",
              border: "2px solid #ddd",
              fontSize: "1.3rem"
            }}
            className="text-slate-900 p-1 text-base rounded"
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="flex flex-row" style={{
            alignItems: "center"
          }}>
            <h1 className="mr-5">Upload base image:</h1>
            <UploadButton
              onUpload={(uri: string) => {
                setImageURI(uri);
              }}
            />
          </div>
          {imageURI && (
            <div style={{
              width: "400px"
            }}>
              <img src={imageURI} className="rounded" style={{
                height: "auto",
                width: "100%",
                display: "block",
                objectFit: "cover",
                marginInline: "auto",
                border: "2px dashed black"
              }}/>
              <button
                disabled={
                  false && (topic?.length === 0 || imageURI?.length === 0)
                }
                onClick={async () => {
                  localStorage.setItem("imageURI", imageURI);
                  localStorage.setItem("topic", topic as string);
                  window.location.href = "pages/result";
                }}
                className="bg-slate-50 p-3 rounded mt-5 hover:bg-slate-200 transition active:bg-slate-100"
                style={{
                  fontSize: "1.3rem"
                }}
              >
                Teach me a Story!
              </button>
            </div>
          )} 
        </div>
      </div>
    </>
  );
}
