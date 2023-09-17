import { ImageEditParams } from "openai/resources/images.mjs";
import openai from "../../api/openai_config";
import { NextRequest, NextResponse } from "next/server";

function dataURItoFile(dataURI: string) {
  // convert base64 to raw binary data held in a string
  const byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  
  return new File([new Blob([ab], {type: mimeString})], "image.png");
}

// gen next frame
export async function POST(req: NextRequest) {
    //imageURI: string
    const json = await req.json();
    const imageURI = json.imageURI;
    const maskURI = json.maskURI ? json.maskURI : imageURI;
    const image = dataURItoFile(imageURI);
    const mask = dataURItoFile(maskURI);

    const params: ImageEditParams = {
        image,
        mask,
        prompt: "magical prince cat on velvet carpet"
    };

    const result = await openai.images.edit(params);

    console.log(result);

    return NextResponse.json(
        {
            response: result.data
        },
        {
            status: 200
        }
    )
};
