import { config } from 'dotenv';
import express from 'express';
import { retrievePage, retrieveBlockChild } from './service/notion';
import { NotionBlockObject } from './type/notion.d';
import JobQueue from './util/jobQueue';
import { saveWithFileName } from './util/saveLog';

config();

const app = express();
const port = 3000;
const QUERY_INTERVAL = Number(process.env.QUERT_INTERVAL) ?? 400;

app.get('/', async (req: express.Request, res: express.Response) => {
  if (req.query.qKey) {
    const PAGE_ID = req.query.qKey as string;
    JobQueue.push(PAGE_ID, 'block');
    JobQueue.push(PAGE_ID, 'page');
    res.send(`query ${PAGE_ID} is now proceed`);
  } else {
    res.status(400).send('Can`t find query string "qKey"');
  }
});

app.get('/page', async (req: express.Request, res: express.Response) => {
  if (req.query.qKey) {
    const PAGE_ID = req.query.qKey as string;
    res.send(`query ${PAGE_ID} is now proceed`);
  } else {
    res.status(400).send('Can`t find query string "qKey"');
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

let retryFailCount = 0;
const retryFailMaxCount = 5;

setInterval(async () => {
  const element = JobQueue.pop();

  if (element) {
    console.log('doing ', element.queryStyle, element.queryKey);
    if (retryFailCount === retryFailMaxCount) {
      console.log('Fail count is over max count');
      process.exit();
    }

    try {
      if (element.queryStyle === 'page') {
        const response = await retrievePage(element.queryKey);
        saveWithFileName(
          JSON.stringify(response, null, 2),
          `${element.queryStyle}-${element.queryKey}`
        );
      } else {
        const response = await retrieveBlockChild(element.queryKey);
        const results = response.results as NotionBlockObject[];
        results.forEach((result) => {
          if (result.type === 'column_list' || result.type === 'column') {
            JobQueue.push(result.id, 'block');
          }
        });
        saveWithFileName(
          JSON.stringify(response, null, 2),
          `${element.queryStyle}-${element.queryKey}`
        );
      }
      retryFailCount = 0;
    } catch {
      console.log(
        `Fail while trying ${element.queryKey} with ${element.queryStyle}`
      );
      retryFailCount += 1;
      JobQueue.push(element.queryKey, element.queryStyle);
    }
  }
}, QUERY_INTERVAL);
