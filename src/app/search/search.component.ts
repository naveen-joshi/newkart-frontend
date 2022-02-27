import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public products = ['apple', 'xioami', 'samsung'];
  control = new FormControl();
  filteredStreets!: Observable<string[]>;

  constructor(private searchService: SearchService, private route: Router) {}

  ngOnInit(): void {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  public searchProduct(value: string) {
    this.searchService.searchQuery(value);
    this.route.navigate(['search'], { queryParams: { keyword: value } });
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.products.filter((product) =>
      this._normalizeValue(product).includes(filterValue)
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
