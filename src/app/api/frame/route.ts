import { ImageEditParams } from "openai/resources/images.mjs";
import openai from "../../api/openai_config";
import { NextRequest, NextResponse } from "next/server";
import * as fs from 'node:fs';

// function dataURItoFile(dataURI: string) {
//   // convert base64 to raw binary data held in a string
//   const byteString = atob(dataURI.split(',')[1]);

//   // separate out the mime component
//   const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

//   // write the bytes of the string to an ArrayBuffer
//   const ab = new ArrayBuffer(byteString.length);
//   const ia = new Uint8Array(ab);
//   for (let i = 0; i < byteString.length; i++) {
//     ia[i] = byteString.charCodeAt(i);
//   }
  
// //   return new File([new Blob([ab], {type: mimeString})], "image.png");

// }

function dataURItoBuffer(dataURI: string) {
  // Remove the data URI header to get the base64 encoded data
  const base64Data = dataURI.replace(/^data:image\/\w+;base64,/, '');

  // Create a Buffer from the base64 data
  const buffer = Buffer.from(base64Data, 'base64');

  return buffer;
}

function dataURItoFile(dataURI: string, filename = 'image.png') {
    const regex = /^data:.+\/(.+);base64,(.*)$/;
    const matches = dataURI.match(regex) as string[];
    var ext = matches[1];
    var data = matches[2];
    var buffer = Buffer.from(data, 'base64');
    
    fs.writeFileSync('data.' + ext, buffer);
    return fs.createReadStream('data.' + ext);
  }

// gen next frame
export async function POST(req: NextRequest) {
    //imageURI: string
    const json = await req.json();
    const imageURI = json.imageURI;
    const maskURI = json.maskURI ? json.maskURI : imageURI;
    const description = json.description;
    const image = dataURItoFile(imageURI);
    const mask = dataURItoFile(maskURI);

    const params: ImageEditParams = {
        image,
        mask,
        prompt: description
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
