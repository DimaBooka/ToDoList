import { Component, OnInit } from '@angular/core';
import { ItemCreate } from '../common-usage/models/item.model';
import { ItemsService } from '../common-usage/services/items.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validationMessages } from '../common-usage/validation-messages';
import { customMaxLengthValidator } from '../common-usage/validators';
import { SubjectItemsService } from '../common-usage/services/subjectItems';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  validationMessages = validationMessages;
  createForm: FormGroup;
  serverError: string;

  constructor(private itemsService: ItemsService,
              private fb: FormBuilder,
              private subjectItems: SubjectItemsService) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      content: ['', [Validators.required, customMaxLengthValidator(30)]],
    });
  }

  addItem() {
    this.serverError = '';
    this.itemsService.createItem(new ItemCreate(this.createForm.get('content').value))
      .subscribe(resp => this.subjectItems.refreshItems(),
                 error => this.serverError = error);
  }

}
