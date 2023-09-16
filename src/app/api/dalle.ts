import { ImageEditParams } from "openai/resources/images.mjs";
import openai from "./openai_config";
import * as fs from "fs";

export const generateNextFrame = async () => {
  const image = fs.createReadStream("fuck.png");

  const params: ImageEditParams = {
    image,
    prompt: "Story goes here",
    mask: image,
  };

  const result = await openai.images.edit(params);

  console.log(result);

  return result.data;
};
