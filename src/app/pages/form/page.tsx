"use client"
import "@/app/api/astica"
import { TexturePainter } from "@/app/mask-painter"
import { UploadButton } from "../../components/UploadButton"
import { useState } from "react";
import callAsticaAPI from "@/app/api/astica";

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

      <button onClick={() => {
        callAsticaAPI(imageURI);
      }}>
        Submit Thingy
      </button>
    </main>
  )
}
