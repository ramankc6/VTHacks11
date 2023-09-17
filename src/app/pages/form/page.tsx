"use client"
import { TexturePainter } from "@/app/mask-painter"
import { UploadButton } from "../../components/UploadButton"
import { useState } from "react";
import axios from "axios";


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
        // const result = await getImageCaption(imageURI);
        // console.log(result);
        // const result = await generateNextFrame(imageURI);
        // console.log(result);
        const result = await axios.post('/api/caption', { imageURI });
        console.log(result);
        // then feed into gpt
      }}>
        Submit Thingy
      </button>
    </main>
  )
}
