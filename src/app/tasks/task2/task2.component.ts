import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task2Service } from './task2.service';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {

  randomNumbers$: Observable<number[]> = this.task2Service.randomNumber$;

  numbersCount$: Observable<number> = this.task2Service.numbersCount$;

  maxNumber$: Observable<number> = this.task2Service.maxNumber$;

  minNumber$: Observable<number> = this.task2Service.minNumber$;

  averageNumber$: Observable<number> = this.task2Service.averageNumber$;


  constructor(private task2Service: Task2Service) { }

  ngOnInit(): void {
  }

  addRandomNumber() {
    this.task2Service.addRandomNumber();
  }
}
