import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDb } from "../../modules/connectToDb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectToDb();
  const fabrics = await db.collection("wishes").find().toArray();

  const randomized = fabrics.sort(() => 0.5 - Math.random());

  res.status(200).json(randomized);
}
