import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-dsa',
  templateUrl: './dsa.component.html',
  styleUrls: ['./dsa.component.css']
})
export class DsaComponent implements OnInit {
  public charakter;


  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get('assets/char_mock1.json')
      .map((response: Response) => response.json())
      .subscribe((result) => {
        this.charakter = result;
      });
  }
}

