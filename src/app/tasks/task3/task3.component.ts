import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task3Service } from './task3.service';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss'],
})
export class Task3Component implements OnInit {
  isHttpLoading$: Observable<boolean> = this.task3Service.isHttpLoading$;

  randomNumbers$: Observable<number[]> = this.task3Service.randomNumber$;

  numbersCount$: Observable<number> = this.task3Service.numbersCount$;

  maxNumber$: Observable<number> = this.task3Service.maxNumber$;

  minNumber$: Observable<number> = this.task3Service.minNumber$;

  averageNumber$: Observable<number> = this.task3Service.averageNumber$;

  constructor(private task3Service: Task3Service) {}

  ngOnInit(): void {}

  addRandomNumber() {
    this.task3Service.addRandomNumber();
  }
}
