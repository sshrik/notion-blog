import type { GetPageResponse } from 'type/queryType';
import results from './mock';

export default async function getPage(
  pageUrl: string
): Promise<GetPageResponse> {
  return new Promise<GetPageResponse>((res, rej) => {
    setTimeout(() => {
      try {
        console.log(`Query to ${pageUrl} is success.`);
        res(results);
      } catch {
        rej();
      }
    }, 200);
  });
}
