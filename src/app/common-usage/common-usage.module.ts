import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from './services/items.service';
import { SubjectItemsService } from './services/subjectItems';
import 'constants';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ItemsService,
    SubjectItemsService
  ]
})
export class CommonUsageModule { }
