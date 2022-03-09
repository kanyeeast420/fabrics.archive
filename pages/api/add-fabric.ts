import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDb } from "../../modules/connectToDb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (typeof req.body.wishName !== "string") {
      throw new Error("bad input");
    }

    const db = await connectToDb();
    const today = new Date();

    await db.collection("wishes").insertOne({
      wishName: req.body.wishName,
      wishUrl: req.body.imgUrl,
      wishLink: req.body.wishLink,
      date:
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate(),
    });

    res.status(200).json({ ok: true });
  }

  if (req.method !== "POST") {
    res.status(200).json({ ok: false });
  }
}
