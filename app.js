var Condition = (function () {
    function Condition(value, word) {
        this.value = value;
        this.word = word;
    }
    return Condition;
}());
var fizz = new Condition(3, "Fizz");
var buzz = new Condition(5, "Buzz");
var conditions = [fizz, buzz];
for (var i = 0; i < conditions.length; i++) {
    var obj = conditions[i];
    for (var key in obj) {
        console.log(key + ": " + obj[key]);
    }
}
