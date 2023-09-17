import { useEffect, useState } from "react";
import { ScrollingText } from "./ScrollingText";
import { Instructions } from "./Instructions";
import Form from "./Form";

export function MainPage(props: {
  opacity: number;
  formOpacity: number;
}): JSX.Element {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoaded(true);
    }, 1200);
    return () => clearTimeout(intervalId);
  });

  return loaded ? (
    <div>
      <div style={{ opacity: props.opacity }}>
        <ScrollingText />
        <Instructions />
      </div>
      <div style={{ opacity: props.formOpacity }}>
        <Form opacity={props.formOpacity} />
      </div>
    </div>
  ) : (
    <></>
  );
}
