import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-document-info',
  templateUrl: 'document-info.component.html',
  styleUrl: 'document-info.component.less'
})
export class DocumentInfoComponent implements OnInit {
  document: any;

  constructor(private route: ActivatedRoute, private documentService: DocumentService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.fetchDocument(id);
    });
  }

  fetchDocument(id: string) {
    this.documentService.getDocumentById(id).subscribe(
      (data) => {
        this.document = data;
      },
      (error) => {
        console.error('Error fetching document:', error);
      }
    );
  }

  downloadDocument() {
    console.log('Downloading document:', this.document.name);
  }
}