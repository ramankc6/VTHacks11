"use client"

import { TexturePainter } from "@/app/mask-painter"
import { UploadButton } from "../../components/UploadButton"
import { useState } from "react";

export default function FormPage() {
  const [imageURI, setImageURI] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        Teach me 
      </p>
      <input type="text" />

      <p>
        Using
      </p>
      <UploadButton onUpload={(uri: string) => {
        console.log(uri);
        setImageURI(uri);
      }}/>
      <TexturePainter backgroundImageURI={imageURI} />

      <button>
        Submit Thingy
      </button>
    </main>
  )
}
