import { config } from 'dotenv';
import express from 'express';
import { retrieveBlockChild } from './service/notion';
import save from './util/saveLog';

config();

const app = express();
const port = 3000;
const PAGE_ID = process.env.ROOT_PAGE_ID ?? '';

app.get('/', async (req: express.Request, res: express.Response) => {
  const response = await retrieveBlockChild(PAGE_ID);
  save(JSON.stringify(response, null, 2));
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
