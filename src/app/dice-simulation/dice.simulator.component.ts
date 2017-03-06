import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-dice',
  templateUrl: 'dice.simulator.component.html',
  styleUrls: ['dice.simulator.component.css']
})
export class DiceComponent implements OnInit {
  diceValues = [];
  diceCountPossibilities = [1, 2, 3, 4];
  selectedDiceCount = new FormControl();

  constructor() { }

  ngOnInit() {
    this.selectedDiceCount.setValue(3);
  }

  rollClicked() {
    this.diceValues = [];

    for (let i = 0; i < this.selectedDiceCount.value; i++) {
      const faceValue = Math.floor(Math.random() * 20) + 1;
      this.diceValues.push(faceValue.toString());
    }
  }
}
