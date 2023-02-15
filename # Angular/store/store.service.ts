import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  private stateSubject = new BehaviorSubject({
    type: 'task',
  });

  getObservable(){
    return this.stateSubject.asObservable()
  }

  setState(state: any) {
    this.stateSubject.next(Object.assign({}, this.getStateSnapshot(), state));
  }

  getState() {
    return this.stateSubject.pipe(distinctUntilChanged());
  }

  getStateSnapshot() {
    return this.stateSubject.getValue();
  }

  select(key: string) {
    return this.stateSubject.pipe(
      map((state: any) => state[key]),
      distinctUntilChanged()
    );
  }
}
