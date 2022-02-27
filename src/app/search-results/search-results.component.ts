import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public searchKeyword = '';
  constructor(
    public searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchKeyword = this.route.snapshot.queryParams['keyword'];
    this.route.queryParams.subscribe((data) => {
      this.searchKeyword = data['keyword'];
    });
  }
}
