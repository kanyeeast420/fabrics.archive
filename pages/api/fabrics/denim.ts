import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDb } from "../../../modules/connectToDb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectToDb();
  
}
