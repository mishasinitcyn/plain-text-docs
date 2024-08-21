import { Component } from '@angular/core';
import { DOC_CONTENT } from './long_document'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'plain-text docs';
  myDocument = {
    name: 'Octokit Issues API',
    category: 'API',
    lastUpdated: new Date('2023-05-15'),
    likes: 1250,
    uploadedBy: 'John Doe',
    description: 'Octokit API documentation, just the Issues section',
    content: DOC_CONTENT
  };
}
