import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const promptsDir = path.join(process.cwd(), "prompts");

  try {
    if (!fs.existsSync(promptsDir)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(promptsDir).filter((f) => {
      const fullPath = path.join(promptsDir, f);
      return fs.statSync(fullPath).isFile();
    });

    return NextResponse.json(files);
  } catch (error) {
    console.error("Error reading prompts directory:", error);
    return NextResponse.json([], { status: 500 });
  }
}
