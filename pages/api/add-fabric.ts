import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDb } from "../../modules/connectToDb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (typeof req.body.name !== "string") {
      throw new Error("bad input");
    }

    const db = await connectToDb();
    const today = new Date();

    await db.collection("wishes").insertOne({
      name: req.body.name,
      img: req.body.img,
      link: req.body.link,
      category: req.body.category,
    });

    res.status(200).json({ ok: true });
  }

  if (req.method !== "POST") {
    res.redirect("/");
  }
}
