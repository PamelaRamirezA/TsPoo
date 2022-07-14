const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1993,1,12);
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

let myVar;

class MyDate{
  year: number;
  month: number;
  day: number;

  constructor(year:number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string{
    let newDateF = this.day.toString()+'/'+this.month.toString()+'/'+this.year.toString();
    return newDateF;
  }

}

const myDate = new MyDate(2022,6,13);
console.log(myDate.printFormat());
