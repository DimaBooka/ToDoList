import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ValidateFieldComponent } from './validate-field/validate-field.component';
import { CommonUsageModule } from './common-usage/common-usage.module';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ListItemsComponent,
    ValidateFieldComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    CommonUsageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
