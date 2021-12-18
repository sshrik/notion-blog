import { Client } from '@notionhq/client';
import { ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints';

export async function retrievePage(pageId: string) {
  const NOTION_SECRET_KEY = process.env.NOTION_SECRET_KEY ?? '';
  const notion = new Client({ auth: NOTION_SECRET_KEY });
  const response = await notion.pages.retrieve({
    page_id: pageId,
  });
  return response;
}

export async function retrieveBlockChild(
  blockId: string
): Promise<ListBlockChildrenResponse> {
  const NOTION_SECRET_KEY = process.env.NOTION_SECRET_KEY ?? '';
  const notion = new Client({ auth: NOTION_SECRET_KEY });
  const response = await notion.blocks.children.list({
    block_id: blockId,
  });
  return response;
}
