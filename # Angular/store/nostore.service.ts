import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NoStoreService {
  constructor() {}

  private state = {
    type: 'ssss',
  };
  
  setState(state: any) {
    this.state = {
      ...this.state,
      ...state,
    };
  }

  getState() {
    return this.state;
  }
}
