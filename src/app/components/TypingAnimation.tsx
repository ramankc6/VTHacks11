import { useEffect, useState } from "react";

export const TypingAnimation = (props: {text: string}) => {
    const [idx, setIdx] = useState(0);

    let realIdx = 0;
    useEffect(() => {
        realIdx = 0;
        let interval = setInterval(() => {
            realIdx += 1;
            setIdx(realIdx);
        }, 40);
        return () => {
            clearInterval(interval);
        }
    }, [props])

    return (
        <>
            {props.text.substring(0, idx + 1)}
        </>
    )
}