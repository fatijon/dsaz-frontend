export interface Charakter {
  id: number;
  person: {
    name: string;
    titel: string;
    profession: string;
    alter: number;
    spezies: string;
    kultur: string;
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
