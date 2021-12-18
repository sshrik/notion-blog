import fs from 'fs';
import path from 'path';
import { v4 } from 'uuid';

function resolveLocation(): string {
  const __dirname = path.resolve();
  return path.resolve(__dirname, 'public', `${v4()}.json`);
}

export default function save(data: string) {
  fs.writeFileSync(resolveLocation(), data);
}
