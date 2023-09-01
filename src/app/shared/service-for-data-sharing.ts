import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceForDataSharing {
  private titleSubject = new Subject<string>();
  name$ = this.titleSubject.asObservable();

  setName(name: string) {
    this.titleSubject.next(name);
  }
}
