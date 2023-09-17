import * as AWS from "aws-sdk";
import { v4 as uuidv4 } from 'uuid';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
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
        Bucket: process.env.S3_BUCKET_NAME as string,
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