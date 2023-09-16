import { ImageEditParams } from "openai/resources/images.mjs";
// import openai from "./openai_config";

function dataURItoFile(dataURI: string) {
  // convert base64 to raw binary data held in a string
  const byteString = atob(dataURI.split(',')[1]);
  console.log(byteString);

  // separate out the mime component
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  
  return new Response(new Blob([ab], {type: mimeString}));
}

export const generateNextFrame = async (imageURI: string) => {
  const image = dataURItoFile(imageURI);

  const params: ImageEditParams = {
    image,
    prompt: "Story goes here",
    mask: image
  };

  // const result = await openai.images.edit(params);

  // console.log(result);

  // return result.data;
};
