import { Injectable } from '@angular/core';

@Injectable()
export class PageDataService {
  public data: any

  constructor() {
    this.data = {
      components: [
        {
          type: "h1",
          text: "Featured Article"
        },
        {
          type: "html",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      ]
    };
  }
}
