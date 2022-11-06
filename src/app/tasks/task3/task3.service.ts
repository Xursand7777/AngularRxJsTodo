import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IStore {
  randomNumbers: number[],
  isHttpLoading: boolean
}

@Injectable()
export class Task3Service {

  private _store: BehaviorSubject<IStore> = new BehaviorSubject<IStore>({
    randomNumbers: [],
    isHttpLoading: false
  });

  constructor(private _http: HttpClient) {}


  // public addRandomNumber$(): Observable<void> {
  // }
  //
  //
  // private _updateStore(data: Partial<IStore>): void {
  //   this._store.next({ ...this._store.getValue(), ...data });
  // }


}
