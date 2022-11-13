import { Injectable } from '@angular/core';
import { BehaviorSubject, map, distinctUntilChanged, Observable } from 'rxjs';

export interface IStore {
  randomNumbers: number[];
}

@Injectable({
  providedIn: 'root',
})
export class Task2Service {
  private _store: BehaviorSubject<IStore> = new BehaviorSubject<IStore>({
    randomNumbers: [30, 3, 6],
  });

  public randomNumber$ = this._store.pipe(
    map((store) => store.randomNumbers),
    distinctUntilChanged()
  );

  public numbersCount$: Observable<number> = this._store.pipe(
    map((store) => store.randomNumbers.length),
    distinctUntilChanged()
  );

  public maxNumber$: Observable<number> = this._store.pipe(
    map((store) => Math.max(...store.randomNumbers)),
    distinctUntilChanged()
  );

  public minNumber$: Observable<number> = this._store.pipe(
    map((store) => Math.min(...store.randomNumbers)),
    distinctUntilChanged()
  );

  public averageNumber$: Observable<number> = this._store.pipe(
    map((store) =>
      Math.round(
        store.randomNumbers.reduce((a, b) => a + b) / store.randomNumbers.length
      )
    ),
    distinctUntilChanged()
  );

  public addRandomNumber(): void {
    const randomNumber = this._getRandomNumber();
    this._updateStore({
      randomNumbers: [...this._store.getValue().randomNumbers, randomNumber],
    });
  }

  private _getRandomNumber(max: number = 100): number {
    return Math.floor(Math.random() * max) + 1;
  }

  private _updateStore(data: Partial<IStore>): void {
    this._store.next({ ...this._store.getValue(), ...data });
  }
}
