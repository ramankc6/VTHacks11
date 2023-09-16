import { useEffect, useState } from "react";
import { ScrollingText } from "./ScrollingText";
import { Instructions } from "./Instructions";
import { UploadButton } from "./UploadButton";

export function MainPage(props: { opacity: number }): JSX.Element {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(intervalId);
  });

  return loaded ? (
    <>
      <div style={{ opacity: props.opacity }}>
        <ScrollingText />
        <Instructions />
      </div>
      <div
        style={{ height: "100%", width: "100%", opacity: 1 - props.opacity }}
      >
        <h1>Hey</h1>
      </div>
    </>
  ) : (
    <></>
  );
}
