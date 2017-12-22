export class ResultItem {

  /*
  This variable says if the resultItem is either a Movie or a Person
  **/
  private type:string;

  /*
  This variable has the name of the resultItem, e.g. Gal Gadot or The last Jedi
  **/
  private name:string;

  /*
  **/
  private genres: string[];

  private knownFor: string[];

  constructor() {}

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  setType(type:string) {
    this.type = type;
  }

  setName(name:string) {
    this.name = name;
  }
}
