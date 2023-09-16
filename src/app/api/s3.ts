import * as AWS from "aws-sdk";
import { v4 as uuidv4 } from 'uuid';
import { promisify } from "util";

AWS.config.update({
  accessKeyId: "AKIAS2W7XBVHMLD4FZ5H",
  secretAccessKey: "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",
  region: "us-east-1"
})

const s3 = new AWS.S3();

function extractBinaryData(dataUri: string) {
  const matches = dataUri.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  if (!matches || matches.length !== 3) {
    throw new Error('Invalid data URI format');
  }

  return Buffer.from(matches[2], 'base64');
}

/**
 * Returns the URL of the uploaded image
 * @param dataUri 
 */
export async function uploadImage(dataUri: string) {
    const imgBuffer = extractBinaryData(dataUri);

    const params = {
        Bucket: 'teach-me-about',
        Key: `${uuidv4()}.png`,
        Body: imgBuffer
    }

    const res = await new Promise((resolve, reject) =>
        s3.upload(params, (err: any, res: any) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        }
    ));
    const url = (res as any).Location as string;
    return url;
}