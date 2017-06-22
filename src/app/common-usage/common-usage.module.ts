import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from './services/items.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ItemsService
  ]
})
export class CommonUsageModule { }
