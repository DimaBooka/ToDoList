import {Component, OnInit } from '@angular/core';
import { Item } from '../common-usage/models/item.model';
import { ItemsService } from '../common-usage/services/items.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validationMessages } from '../common-usage/validation-messages';
import { customMaxLengthValidator } from '../common-usage/validators';


@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  validationMessages = validationMessages;
  addForm: FormGroup;

  constructor(private itemsService: ItemsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.fb.group({
      content: ['', [Validators.required, customMaxLengthValidator(20)]],
    });
  }

  addItem() {
    this.itemsService.addItem(new Item(this.addForm.get('content').value));
  }

}
