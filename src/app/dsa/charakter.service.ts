import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class CharakterService {

  constructor(private http: Http) {
  }

  getCharakter() {
    return this.http.get('assets/charakters.json');
  }
}
