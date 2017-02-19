import {Component, OnInit, DebugElement} from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: 'dice.simulator.component.html',
  styleUrls: ['dice.simulator.component.css']
})
export class DiceComponent implements OnInit {
  public dices: Array<String>;
  constructor() { }

  ngOnInit() {
  }

  clicked() {
    this.dices = new Array<String>();
    const diceCount = (document.querySelector('input[type=number]') as HTMLInputElement).value || 2;
    for (let i = 0; i < diceCount; i++) {
        const faceValue = Math.floor(Math.random() * 20) + 1;
        this.dices.push(faceValue.toString());
      }
  }
}
