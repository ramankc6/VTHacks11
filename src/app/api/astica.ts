// src/api/astica.ts

import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import fs from "fs-extra";
import axios from "axios";
import { Request } from "express";

const upload = multer({ dest: "uploads/" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest & Request,
  res: NextApiResponse
) {
  try {
    // Use the upload middleware to handle file upload
    upload.single("image")(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ error: "An error occurred during file upload" });
      }

      // Get the uploaded file path
      const { path } = req.file;

      // Send the image to the Astica API for description generation
      const response = await axios.post("ASTICA_API_ENDPOINT", {
        image: fs.readFileSync(path, { encoding: "base64" }),
      });

      // Get the description from the Astica API response
      const description = response.data.description;

      // Delete the uploaded file
      await fs.unlink(path);

      // Manually set the response status and send JSON data
      res.status(200).json({ description });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}
