import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { RouterModule, Routes } from '@angular/router';

import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: '01', component: Task1Component },
  { path: '02', component: Task2Component },
  { path: '03', component: Task3Component },
];

@NgModule({
  declarations: [TasksComponent, Task1Component, Task2Component, Task3Component],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ]
})
export class TasksModule { }

