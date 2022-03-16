import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDb } from "../../../modules/connectToDb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectToDb();
  const category = req.query.category;
  const items = await db
    .collection("wishes")
    .find({
      category: category,
    })
    .toArray();

  res.status(200).json(items);
}
