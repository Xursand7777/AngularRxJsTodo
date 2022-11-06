import { Injectable } from '@angular/core';
import {BehaviorSubject, distinctUntilChanged,  map, Observable} from 'rxjs';


export interface IUser {
  id: number,
  name: string
}

interface IStore {
  counter: number,
  users: IUser[]
}

@Injectable()
export class Task1Service {

  private _store: BehaviorSubject<IStore> = new BehaviorSubject<IStore>({
    counter: 1,
    users:[
      { id: 2, name: 'John' },
      { id: 3, name: 'Mike' },
      { id: 4, name: 'Alex' },
      { id: 6, name: 'Eugene' },
      { id: 9, name: 'Angela' },
      { id: 10, name: 'Casey' },
    ],
  })

  public counter$$:Observable<number> = this._store.pipe(
    map((store) => store.counter),
    distinctUntilChanged()
  );

  public foundUser$$:Observable<IUser | null> = this._store.pipe(
    map((store) => store.users.find(user => user.id === store.counter) ?? null),
    distinctUntilChanged()
  );


  public incrementCounter(): void {
    const currentCounter = this._store.getValue().counter + 1;
    if(currentCounter > 10){
      return;
    }
    this._updateStore({ counter: currentCounter });
  }

  public decrementCounter(): void {
    const currentCounter = this._store.getValue().counter - 1;
    if(currentCounter < 1){
      return;
    }
    this._updateStore({ counter: currentCounter });
  }

  private _updateStore(data: Partial<IStore>): void {
    this._store.next({ ...this._store.getValue(), ...data });
  }
}
