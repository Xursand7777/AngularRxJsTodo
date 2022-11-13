import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IStore {
  randomNumbers: number[];
  isHttpLoading: boolean;
}

@Injectable({
  providedIn: 'root',
})

export class Task3Service {
  url = 'http://localhost:3000/randomNumber';

  private _store: BehaviorSubject<IStore> = new BehaviorSubject<IStore>({
    randomNumbers: [],
    isHttpLoading: false,
  });

  constructor(private _http: HttpClient) {}

  public randomNumber$ = this._store.pipe(
    map((store) => store.randomNumbers),
    distinctUntilChanged()
  );

  public numbersCount$: Observable<number> = this._store.pipe(
    map((store) => store.randomNumbers.length),
    distinctUntilChanged()
  );

  public isHttpLoading$: Observable<boolean> = this._store.pipe(
    map((store) => store.isHttpLoading),
    distinctUntilChanged()
  );


  public maxNumber$: Observable<number> = this._store.pipe(
    map((store) => store.randomNumbers.length ?? Math.max(...store.randomNumbers)),
    distinctUntilChanged()
  );

  public minNumber$: Observable<number> = this._store.pipe(
    map((store) => store.randomNumbers.length ?? Math.min(...store.randomNumbers)),
    distinctUntilChanged()
  );

  public averageNumber$: Observable<number> = this._store.pipe(
    map((store) => store.randomNumbers.length ??
      Math.round(
        store.randomNumbers.reduce((a, b) => a + b, 0) / store.randomNumbers.length
      )
    ),
    distinctUntilChanged()
  );

  public addRandomNumber(): void {
    this._updateStore({
      ...this._store.getValue(),
      isHttpLoading: true,
    });
    this._getRandom$().subscribe((number) => {
      this._updateStore({
        randomNumbers: [...this._store.getValue().randomNumbers, number],
        isHttpLoading: false,
      });
    });
  }

  private _getRandom$(): Observable<number> {
    return this._http.get<number>(this.url)
  }

  private _updateStore(data: Partial<IStore>): void {
    this._store.next({ ...this._store.getValue(), ...data });
  }
}
