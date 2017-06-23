import { Injectable } from '@angular/core';
import { ItemList, ItemCreate } from '../models/item.model';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HandleError } from '../handlers';
import { API_PATH } from '../constants';

@Injectable()
export class ItemsService {

  headers: Headers = new Headers();
  options: any = { headers: this.headers };

  allItems: ItemList[];

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  getItems(): Observable<ItemList[]> {
    return this.http.get(API_PATH)
      .map((resp: Response) => {

        let itemsList = resp.json();
        this.allItems = [];

        itemsList.map((item, index) => this.allItems.push(
          new ItemList(item.id, item.content, item.status))
        );
        return this.allItems;
      })
      .catch(HandleError);
  }

  createItem(item: ItemCreate) {
    return this.http.post(API_PATH, JSON.stringify(item), this.options)
      .map((resp) => resp.json())
      .catch(HandleError)
  }

  removeItem(index: number) {
    return this.http.delete(`${API_PATH}/${index}`)
      .map((resp) => resp.json())
      .catch(HandleError)
  }

  updateItem(item: ItemList) {
    return this.http.patch(`${API_PATH}/${item.id}`, JSON.stringify(item), this.options)
      .map((resp) => resp.json())
      .catch(HandleError)
  }
}
