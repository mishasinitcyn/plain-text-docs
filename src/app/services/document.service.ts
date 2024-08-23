import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = '/api/documents';

  constructor(private http: HttpClient) { }

  getDocumentById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createDocument(document: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, document);
  }

  downloadDocument(document: any): Observable<Blob> {
    const blob = new Blob([document.content], { type: 'text/plain' });
    return of(blob);
  }
}