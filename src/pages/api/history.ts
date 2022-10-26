import path from "path";
import { promises as fs } from "fs";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(jsonDirectory + "/history.json", "utf8");
  res.status(200).json(fileContents);
}
