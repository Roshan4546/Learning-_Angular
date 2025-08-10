import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';
import { EventHandler } from './event-handler/event-handler';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Login,Signup, Profile, EventHandler],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  
  title = 'App_1';
  name: string = 'Roshan';
  
  data: string | number = 'string';
  bool: string | boolean = true;
  // to handle multiple datatype use any
  Any: any = "false";
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

  changehandler() {
    alert("function called");
    this.otherfunction();
  }

  otherfunction() {
    console.log("another function.");
  }

  update_name() {
    this.data = "15";
    console.log("mouse is over");
    
    // this.bool = "boolean";
  }
  sum(a:number,b:number) {
    console.log(a + b);
  }
}
