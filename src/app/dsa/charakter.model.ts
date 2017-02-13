export interface Charakter {
  id: number;
  person: {
    name: string;
    familienname: string;
    geburtsort: string;
    geburtsdatum: string;
    alter: string;
    geschlecht: string;
    spezies: string;
    groesse: string;
    gewicht: string;
    haarfarbe: string;
    augenfarbe: string;
    kultur: string;
    profession: string;
    titel: string;
    sozialstatus: string;
    charakteristika: string;
    sonstiges: string;
  };
  attribut: {
    mu: number;
    kl: number;
    in: number;
    ch: number;
    ff: number;
    ge: number;
    ku: number;
    kk: number;
  };
  fertigkeiten: {
    talente: {
      name: string;
      talentAttribute: {};
      wert: number;
    };
  };
  kampfteschniken: {
    talente: {
      name: string;
      talentAttribute: string;
      wert: number;
    };
  };
}
