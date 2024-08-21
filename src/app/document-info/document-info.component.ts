import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-document-info',
  templateUrl: 'document-info.component.html',
  styleUrl: 'document-info.component.less'
})
export class DocumentInfoComponent {
  @Input() document: any;

  constructor(){}

  downloadDocument() {
    // Implement download logic here
    console.log('Downloading document:', this.document.name);
  }
}