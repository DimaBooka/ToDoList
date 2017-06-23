import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SubjectItemsService {
  private subject = new Subject<any>();

  refreshItems() {
    this.subject.next();
  }

  getTriggers(): Observable<any> {
    return this.subject.asObservable();
  }
}
