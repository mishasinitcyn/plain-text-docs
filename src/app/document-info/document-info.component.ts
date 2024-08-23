import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../services/document.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-document-info',
  templateUrl: 'document-info.component.html',
  styleUrl: 'document-info.component.less'
})
export class DocumentInfoComponent implements OnInit {
  document: any;

  constructor(private route: ActivatedRoute, private documentService: DocumentService, private message: NzMessageService) {}

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
        this.message.error('Failed to fetch document');
      }
    );
  }

  downloadDocument() {
    if (!this.document) {
      this.message.warning('No document to download');
      return;
    }
  
    this.documentService.downloadDocument(this.document).subscribe(
      (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${this.document.title}.${this.document.file_type}`;
        link.click();
        window.URL.revokeObjectURL(url);
  
        this.message.success('Document downloaded successfully');
      },
      (error) => this.message.error('Failed to prepare document for download')
    );
  }
}