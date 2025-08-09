import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  count = 0;

  increament() {
    console.log("add");
    this.count++;
  }
  reset() {
    console.log('reset');
    this.count = 0;
  }
  decrement() {
    console.log('sub');
    if (this.count === 0) {
      alert('You are at the last position.');
    } else {
      this.count--;
    }
  }

}
