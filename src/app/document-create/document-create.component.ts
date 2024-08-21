// document-create.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.less']
})
export class DocumentCreateComponent {
  documentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private documentService: DocumentService,
    private message: NzMessageService,
    private router: Router
  ) {
    this.documentForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(255)]],
      description: [''],
      content: ['', Validators.required],
      category: ['', Validators.maxLength(100)],
      file_type: ['', Validators.maxLength(50)]
    });
  }

  submitForm(): void {
    if (this.documentForm.valid) {
      this.documentService.createDocument(this.documentForm.value).subscribe(
        (response) => {
          this.message.success('Document created successfully');
          this.router.navigate(['/document', response.id]);
        },
        (error) => {
          this.message.error('Failed to create document');
          console.error('Error creating document:', error);
        }
      );
    } else {
      Object.values(this.documentForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}