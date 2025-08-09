import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Login,Signup],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  
  title = 'App_1';
  name = 'Roshan';
  // x: boolean = false;

  // // setXTrue() {
  // //   this.x = true;
  // // }
  // changehandler() {
  //   this.x = true;
  // }
  // items: string[][] = [
  //   ['id', 'name', 'age', 'sec'],
  //   ['1', 'Roshan', '20', 'a'],
  //   ['2', 'Tabhis', '21', 'b'],
  //   ['3', 'Sachin', '22', 'c'],
  //   ['4', 'Ayush', '20', 'c']
  // ];



}
