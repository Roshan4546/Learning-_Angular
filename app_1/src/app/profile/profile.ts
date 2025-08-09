import { Component } from "@angular/core";


//  when we create component we use this @ to decorate this
@Component({
    //  at least two key need

    selector: 'profile',
    // template: '<h1>Profile Component </h1>',
    // styles: 'h1{color : green}',
    templateUrl: './profile.html',
    styleUrl : './profile.css'
})

export class Profile{
    
}