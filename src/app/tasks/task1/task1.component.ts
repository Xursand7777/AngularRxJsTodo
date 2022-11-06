import { Component } from '@angular/core';
import {IUser, Task1Service} from "./task1.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss'],
  providers: [Task1Service]
})
export class Task1Component  {
  constructor(private Task1Service: Task1Service) { }

  public counter$$: Observable<number> = this.Task1Service.counter$$;
  public foundUser$$: Observable<IUser | null> = this.Task1Service.foundUser$$;


  onIncrementClick():void {
    this.Task1Service.incrementCounter();
  }

  onDecrementClick():void {
    this.Task1Service.decrementCounter();
  }

}
