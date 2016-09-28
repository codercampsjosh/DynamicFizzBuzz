class Condition {
  value:number;
  word:string;
  constructor(value, word) {
    this.value = value;
    this.word = word;
  }
}
let fizz = new Condition(3, `Fizz`);
let buzz = new Condition(5, `Buzz`);
var conditions:Condition[] = [fizz, buzz];
for (let i = 0; i < conditions.length; i++) {
    let obj = conditions[i];
    for(var key in obj) {
      console.log(`${key}: ${obj[key]}`)
    }
}
