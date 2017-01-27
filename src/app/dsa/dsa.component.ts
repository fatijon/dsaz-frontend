import {Component, OnInit, Output} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-dsa',
  templateUrl: './dsa.component.html',
  styleUrls: ['./dsa.component.css']
})
export class DsaComponent implements OnInit {
  @Output() private charakter;
  test = 'tttt';

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.charakter = {};
    this.charakter = this.http.get('assets/charakters.json')
      .map(response => response.json())
      .subscribe(result => this.charakter = result);
  }
  getShow(){
    console.log(this.charakter)
  }
}

