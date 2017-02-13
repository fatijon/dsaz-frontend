import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import { FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-dsa',
  templateUrl: './dsa.component.html',
  styleUrls: ['./dsa.component.css']
})
export class DsaComponent implements OnInit {
  public heroForm: FormGroup;


  constructor(private http: Http,
  private fb: FormBuilder) {
    this.heroForm = this.fb.group ({
      name: '',
      familie: '',
      geburtsort: '',
      geburtsdatum: '',
      alter: '',
      geschlecht: '',
      spezies: '',
      groesse: '',
      gewicht: '',
      haarfarbe: '',
      augenfarbe: '',
      kultur: '',
      profession: '',
      titel: '',
      sozialstatus: '',
      charakteristika: '',
      sonstiges: '',
    });
  }

  ngOnInit() {
    this.http.get('assets/charakters.json')
      .map((response: Response) => response.json())
      .subscribe((result) => {
        this.heroForm.patchValue({name: result.person.name});
        this.heroForm.patchValue({familie: result.person.familienname});
        this.heroForm.patchValue({geburtsort: result.person.geburtsort});
        this.heroForm.patchValue({geburtsdatum: result.person.geburtsdatum});
        this.heroForm.patchValue({alter: result.person.alter});
        this.heroForm.patchValue({geschlecht: result.person.geschlecht});
        this.heroForm.patchValue({spezies: result.person.spezies});
        this.heroForm.patchValue({groesse: result.person.groesse});
        this.heroForm.patchValue({gewicht: result.person.gewicht});
        this.heroForm.patchValue({haarfarbe: result.person.haarfarbe});
        this.heroForm.patchValue({augenfarbe: result.person.augenfarbe});
        this.heroForm.patchValue({kultur: result.person.kultur});
        this.heroForm.patchValue({profession: result.person.profession});
        this.heroForm.patchValue({titel: result.person.titel});
        this.heroForm.patchValue({sozialstatus: result.person.sozialstatus});
        this.heroForm.patchValue({charakteristika: result.person.charakteristika});
        this.heroForm.patchValue({sonstiges: result.person.sonstiges});
      });
  }
}

