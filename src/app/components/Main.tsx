import { useEffect, useState } from "react";
import { ScrollingText } from "./ScrollingText";
import { Instructions } from "./Instructions";
import { UploadButton } from "./UploadButton";

export function MainPage(props: { opacity: number }): JSX.Element {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoaded(true);
    }, 2000);
    return () => clearTimeout(intervalId);
  });

  return loaded ? (
    <>
      <div style={{ opacity: props.opacity }}>
        <ScrollingText />
        <Instructions />
      </div>
      <div style={{ width: "100%", opacity: 1 - props.opacity }}>
        <UploadButton onUpload={(uri) => {}} />
      </div>
    </>
  ) : (
    <></>
  );
}
