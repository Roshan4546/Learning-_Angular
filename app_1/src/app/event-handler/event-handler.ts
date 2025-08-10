import { Component } from '@angular/core';

@Component({
  selector: 'EventHandler',
  imports: [],
  templateUrl: './event-handler.html',
  styleUrl: './event-handler.css'
})
export class EventHandler {
  handleOnclck(e: MouseEvent) {
    console.log("mouse is click");
    console.dir(e.target); // shows all properties in an expandable object
    console.log(e.type);
    console.log((e.target as Element).classList);
  }

  bgColor = 'lightblue';

  changeColor(color: string) {
    this.bgColor = color;
  }

handleinput(e: Event) {
  console.log((e.target as HTMLInputElement).value);
}


}
