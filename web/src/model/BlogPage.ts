import { makeAutoObservable } from 'mobx';
import type { NotionBlockObject } from 'type/notion';
import getPage from 'service/queryBlog';

class BlogPage {
  private _response: NotionBlockObject[];

  constructor() {
    makeAutoObservable(this);
    this._response = {} as NotionBlockObject[];
  }

  async changePage(pageUrl: string) {
    const res = await getPage(pageUrl);
    this._response = res.results;
  }

  get response() {
    return this._response;
  }
}

export default new BlogPage();
