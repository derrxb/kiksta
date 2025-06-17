import { promises as fs } from "fs";
import path from "path";

const CACHE_DIR = path.resolve(".cache");

// Ensure the cache directory exists
async function ensureCacheDir() {
  await fs.mkdir(CACHE_DIR, { recursive: true });
}

function getCacheFilePath(key: string): string {
  const safeKey = encodeURIComponent(key);
  return path.join(CACHE_DIR, `${safeKey}.json`);
}

export async function set(key: string, value: unknown): Promise<void> {
  await ensureCacheDir();
  const filePath = getCacheFilePath(key);
  await fs.writeFile(filePath, JSON.stringify(value), "utf-8");
}

export async function get<T = unknown>(key: string): Promise<T | null> {
  const filePath = getCacheFilePath(key);
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data) as T;
  } catch {
    return null;
  }
}

export async function exists(key: string): Promise<boolean> {
  const filePath = getCacheFilePath(key);
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}
