"use client";

import * as THREE from "three";
import React, { useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { TexturePainterRenderer } from "./renderer";
import { Tool, circleBrush } from "./tools";
import { TexturePainterOverlay } from "./overlay";
import { TexturePainterControls, kInitialControlState } from "./controls";

export * from "./tools";

/**
 * A component that renders a canvas that can be used to paint on a texture.
 */
export function TexturePainter(props: {
  formOpacity: number;
  texture: THREE.Texture;
}): JSX.Element {
  // These handlers are used to register the cursor events with the canvas.
  // If the handlers are not registered, then the cursor events will not be
  // captured by the canvas. These are registered in the TexturePainterControls
  // component.
  const [cursorUpHandler, setCursorUpHandler] =
    useState<React.MouseEventHandler>();
  const [cursorDownHandler, setCursorDownHandler] =
    useState<React.MouseEventHandler>();
  const [cursorLeaveHandler, setCursorLeaveHandler] =
    useState<React.MouseEventHandler>();
  const [cursorEnterHandler, setCursorEnterHandler] =
    useState<React.MouseEventHandler>();

  // The currently selected tool.
  const [tool, setTool] = useState<Tool>(
    circleBrush(20.0, new THREE.Color(0xffffff), 0.25)
  );

  // The current state of the controls.
  const [controls, setControls] = useState(kInitialControlState);

  // This is used to hide the cursor overlay when the cursor leaves the canvas.
  const [hideCursorOverlay, setHideCursorOverlay] = useState(true);

  const drawingPoints = useMemo(() => {
    return new Uint8Array(
      props.texture.image.width * props.texture.image.height * 4
    );
  }, [props.texture]);

  return (
    <>
      <TexturePainterOverlay updateTool={setTool} />
      <div
        className="texture-painter-container"
        style={{
          opacity: props.formOpacity * props.formOpacity,
          width: props.formOpacity * props.texture.image.width,
          height: props.formOpacity * props.texture.image.height,
        }}
      >
        <Canvas
          className="texture-painter-canvas"
          onPointerEnter={cursorEnterHandler}
          onPointerLeave={cursorLeaveHandler}
          onPointerDown={cursorDownHandler}
          onPointerUp={cursorUpHandler}
        >
          <TexturePainterControls
            registerCursorDownHandler={setCursorDownHandler}
            registerCursorUpHandler={setCursorUpHandler}
            registerCursorEnterHandler={setCursorEnterHandler}
            registerCursorLeaveHandler={setCursorLeaveHandler}
            hideCursorOverlay={setHideCursorOverlay}
            updateControls={(e) => setControls({ ...controls, ...e })}
          />
          <TexturePainterRenderer
            frameHandler={tool.frameHandler}
            cursorOverlay={tool.cursorOverlay}
            drawingPoints={drawingPoints}
            controls={controls}
            hideCursorOverlay={hideCursorOverlay}
            texture={props.texture}
          />{" "}
        </Canvas>
      </div>
    </>
  );
}
