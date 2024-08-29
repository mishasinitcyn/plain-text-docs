import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentInfoComponent } from './document-info/document-info.component';
import { DocumentCreateComponent } from './document-create/document-create.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'document/create', component: DocumentCreateComponent },
  { path: 'document/:id', component: DocumentInfoComponent },
  { path: '*', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }