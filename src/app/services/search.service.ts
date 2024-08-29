import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchDocuments(query: string, category: string, sortBy: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/documents/search`, {
      params: { query, category, sortBy }
    });
  }
}