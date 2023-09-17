"use client";
import { TexturePainter } from "@/app/mask-painter";
import { UploadButton } from "./UploadButton";
import { useMemo, useState } from "react";
import * as THREE from "three";
import axios from "axios";

export default function FormPage(props: { opacity: number }) {
  const [imageURI, setImageURI] = useState<string>();
  const [topic, setTopic] = useState<string>("");

  const texture = useMemo(() => {
    if (imageURI) {
      return new THREE.TextureLoader().load(imageURI);
    }
  }, [imageURI]);

  return (
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
        maxWidth: "30%",
        minWidth: "30%",
        minHeight: "75%",
        maxHeight: "75%",
        fontSize: "48px",
        fontFamily: "Storytime",
        textAlign: "left",
      }}
    >
      <span className="mr-5">Teach me</span>
      <input
        type="text"
        style={{ marginBottom: "8px" }}
        className="text-slate-500 p-1 text-sm rounded"
        onChange={e => {
          setTopic(e.target.value);
        }}
      />
      <span className="mr-5">Upload the Protagonist:</span>
      <UploadButton
        onUpload={(uri: string) => {
          setImageURI(uri);
        }}
      />
      {imageURI && texture ? (
        <>
          <TexturePainter formOpacity={props.opacity} texture={texture} />
          <button disabled={false && (topic.length === 0 || imageURI?.length === 0)}
            onClick={async () => {
              // save prompt and
              localStorage.setItem("imageURI", imageURI);
              localStorage.setItem("topic", topic);
              localStorage.setItem("maskURI", imageURI);

              window.location.href = 'pages/result';
            }}
          >
            Submit Thingy
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
