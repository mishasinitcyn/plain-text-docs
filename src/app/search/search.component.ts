import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject, of } from 'rxjs';
import { SearchService } from '../services/search.service';
import { Categories } from '../interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  searchQuery = '';
  searchResults: any[] = [];
  categories = Categories;
  selectedCategory = 'All';
  sortBy = 'relevance';
  private searchTerms = new Subject<string>();

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchTerms.pipe(
      // debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        if (term.trim() === '') {
          // If the search term is empty, return an empty result set
          return of({ hits: [] });
        } else {
          // Otherwise, perform the search
          return this.searchService.searchDocuments(term, this.selectedCategory, this.sortBy);
        }
      })
    ).subscribe(results => {
      this.searchResults = results.hits;
      console.log("SEARCH RESULTS", this.searchResults)
    });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  onKeyUp(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.search(target.value);
  }

  onCategoryChange(): void {
    this.search(this.searchQuery);
  }

  onSortChange(): void {
    this.search(this.searchQuery);
  }
}