import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemList } from '../common-usage/models/item.model';
import { ItemsService } from '../common-usage/services/items.service';
import { Subscription } from 'rxjs/Subscription';
import { SubjectItemsService } from '../common-usage/services/subjectItems';

@Component({
  selector: 'list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit, OnDestroy {

  items: ItemList[] = [];
  subscription: Subscription;
  serverError: string;

  constructor(private itemsService: ItemsService, private subjectItems: SubjectItemsService) {
    this.subscription = this.subjectItems.getTriggers().subscribe(trigger => {
      this.itemsService.getItems().subscribe(items => this.items = items);
    });
  }

  ngOnInit() {
    this.itemsService.getItems().subscribe(items => this.items = items);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeItem(index: number) {
    this.itemsService.removeItem(index).subscribe(resp => this.subjectItems.refreshItems(),
                                                  error => this.serverError = error);
  }

  updateItemInfo(item: ItemList) {
    item.status = !item.status;
    this.itemsService.updateItem(item).subscribe(resp => this.subjectItems.refreshItems(),
                                                 error => this.serverError = error);
  }
}
