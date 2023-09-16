"use client"
import "@/app/api/astica"
import { TexturePainter } from "@/app/mask-painter"
import { UploadButton } from "../../components/UploadButton"
import { useState } from "react";
import callAsticaAPI from "@/app/api/astica";
import { getStory } from "@/app/api/chatgpt";

export default function FormPage() {
  const [imageURI, setImageURI] = useState("");

  return (
    <main className="flex min-h-screen items-center flex-col">
      <div className="text-lg">
        <div className="mb-5">
          <span className="mr-5">
            Teach me 
          </span>
        <input type="text" className="text-slate-900 p-1 text-sm rounded"/>
        </div>
        <div>
          <span className="mr-5">
            Using
          </span>
          <UploadButton onUpload={(uri: string) => {
            console.log(uri);
            setImageURI(uri);
          }} />
        </div>
      </div>
      <TexturePainter backgroundImageURI={imageURI} />

      <button onClick={async () => {
        /**
           * Send to astica and whatever using imageURI
           */
        callAsticaAPI(imageURI);
        const story = await getStory("Mitosis", "A cat sitting princely");
        console.log(story);
      }}>
        Submit Thingy
      </button>
    </main>
  )
}
