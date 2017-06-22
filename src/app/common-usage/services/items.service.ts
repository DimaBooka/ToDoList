import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable()
export class ItemsService {

  allItems: Item[];

  constructor() {}

  getItems() {
    return this.allItems = [
      new Item('super descr'),
      new Item('awdawd adw adescar super'),
      new Item('supawdadwer descrawdaw awdd')
    ];
  }

  get items() {
    return this.allItems;
  }

  set items(items) {
    this.allItems = items;
  }

  addItem(item: Item) {
    return this.allItems.push(item);
  }

  removeItem(index: number) {
    this.allItems.splice(index, 1);
  }

}
