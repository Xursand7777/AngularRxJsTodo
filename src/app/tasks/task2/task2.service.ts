import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IStore {
  randomNumbers: number[]
}

@Injectable()
export class Task2Service {

  private _store: BehaviorSubject<IStore> = new BehaviorSubject<IStore>({
    randomNumbers: []
  });

  // public addRandomNumber(): void {
  //
  // }
  //
  // private _getRandomNumber(max: number = 100): number {
  //
  // }
  //
  // private _updateStore(data: Partial<IStore>): void {
  //
  // }

}
