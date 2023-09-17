"use client";
import React, { useEffect } from "react";
import { Item } from "../../components/CarouselComponents";
import Carousel from "../../components/Carousel";
import { TypeAnimation } from "react-type-animation";
import LoadingText from "@/app/components/LoadingText";
import axios from "axios";
import { TypingAnimation } from "@/app/components/TypingAnimation";

type ResultState = "loading" | "success";

type StoryBoard = {
  narration: string;
  dalleImage: string; // URL to image
};

function ResultsPage() {
  const [story, setStory] = React.useState<StoryBoard[]>([]);
  const [state, setState] = React.useState<ResultState>("loading");
  const [title, setTitle] = React.useState<string>("");

  const [narration, setNarration] = React.useState<string>();

  const [menuItem, setMenuItem] = React.useState<number>(0);

  useEffect(() => {
    (async () => {
      // Orchestrate requests based on the state of local storage
      console.log("Starting request with");
      const imageURI = localStorage.getItem("imageURI") as string;
      const topic = localStorage.getItem("topic") as string;

      setTitle(topic);

      // Step 1: Get astica caption
      console.log("Getting caption for the image");
      const caption = await axios.post("/api/caption", {
        imageURI,
      });
      console.log(caption.data);

      // // Step 2: Get GPT story script
      console.log("Reaching out to GPT to write a story");
      const narrations = await axios.post("/api/story", {
        caption: caption.data.caption,
        topic,
      });
      const { title, parts } = narrations.data.story;
      console.log(title, parts);

      const newStory = [];
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        // get image from dalle
        const image = (
          await axios.post("/api/frame", {
            description: part.prompt_for_dalle,
          })
        ).data.url[0].url as string;
        newStory.push({
          dalleImage: image,
          narration: part.script,
        });
      }

      setStory(newStory);

      const narration = await axios.post("/api/narration", {
        text: newStory,
      });

      console.log(narration.data.audioUrl);

      setState("success");
    })();
  }, []);

  return (
    <>
      {state === "success" && (
        <main className="flex min-h-screen min-w-screen items-center flex-col">
          <h1 className="font-bold">
            Let's learn about{" "}
            <span
              className="italic"
              style={{
                textShadow: "#FC0 1px 0 10px",
              }}
            >
              {title}
            </span>
          </h1>
          <div
            style={{
              position: "absolute",
              width: "90%",
              minHeight: "100%",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              top: "2%",
            }}
          >
            <div className="flex flex-row">
              <button
                disabled={menuItem === 0}
                className="mr-10 transition opacity-50 disabled:opacity-25 hover:opacity-100"
                style={{
                  pointerEvents: "all",
                }}
                onClick={() => {
                  setMenuItem(menuItem - 1);
                  console.log("hello");
                }}
              >
                <img
                  src="/leftArrow.png"
                  style={{
                    width: 50,
                    cursor: "pointer",
                  }}
                />
              </button>
              <img
                src={story[menuItem].dalleImage}
                style={{
                  width: 400,
                }}
              />
              <button
                disabled={menuItem === 3}
                className="ml-10 transition opacity-50 disabled:opacity-25 hover:opacity-100"
                style={{
                  pointerEvents: "all",
                }}
                onClick={() => {
                  setMenuItem(menuItem + 1);
                  console.log("hello");
                }}
              >
                <img
                  src="/rightArrow.png"
                  style={{
                    width: 50,
                    cursor: "pointer",
                  }}
                />
              </button>
            </div>

            <div
              style={{
                textAlign: "justify",
                lineHeight: 1.2,
                width: "700px",
                fontFamily: "Storytime",
              }}
            >
              <TypingAnimation text={story[menuItem].narration} />
            </div>
          </div>
        </main>
      )}
      {state === "loading" && (
        <main className="flex min-h-screen items-center flex-col">
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Storytime",
              flexDirection: "column",
            }}
          >
            <LoadingText />

            <p className="text-base italic text-center">
              This may take a minute or two!
            </p>
          </div>
        </main>
      )}
    </>
  );
}

export default ResultsPage;
