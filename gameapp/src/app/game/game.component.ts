import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  // ng-init equivalent (initial values)
  title: string = "Game List Using Angular Directives";

  games: string[] = [
    "Cricket", 
    "Football", 
    "Hockey", 
    "Badminton", 
    "Chess"
  ];

  showList: boolean = false;

  // ng-click equivalent
  displayGames() {
    this.showList = true;
  }
}
