import { Component, OnInit } from '@angular/core';
import { Item } from '../common-usage/models/item.model';
import { ItemsService } from '../common-usage/services/items.service';

@Component({
  selector: 'list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.items = this.itemsService.getItems();
  }

  removeItem(index: number) {
    this.itemsService.removeItem(index);
  }

}
