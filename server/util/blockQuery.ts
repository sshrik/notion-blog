import fs from 'fs';
import path from 'path';
import { NotionBlockObject } from '../type/notion.d';

const readBlock = (key: string): NotionBlockObject[] => {
  const __dirname = path.resolve();
  const fileName = path.resolve(__dirname, 'public', `block-${key}`);
  const data = fs.readFileSync(fileName).toString();
  return JSON.parse(data).results as NotionBlockObject[];
};

const getBlock = (key: string): NotionBlockObject[] => {
  const blocks = readBlock(key);
  blocks.forEach((block, index) => {});

  return blocks;
};

export default getBlock;
