import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _loading = new BehaviorSubject<boolean>(false);

  constructor() {}

  getLoading() {
    return this._loading.asObservable();
  }

  setLoading(loading: boolean) {
    console.log('here', loading);
    this._loading.next(loading);
  }
}
