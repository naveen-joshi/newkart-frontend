import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public searchKeyword = new EventEmitter();

  constructor() {}

  searchQuery(keyword: string) {
    console.log(keyword);
    this.searchKeyword.emit(keyword);
  }
}
