function hello() {
  console.log("Hello World!");
}
function helloyou(name) {
  console.log("hello "+name);
}
function addNum(num1, num2) {
  console.log(num1 + num2);
}
function helloSomeone(name="Frankie") {
  console.log("Hello "+name);
}
function formal(name = "Sam", title ="sir") {
  return title+ " "+name
}
function timesFive(numInput) {
  var result = numInput*5
  return result
}

//global scope
var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"
function fun(stuff) {
  console.log(v);
  stuff = "Reassign stuff inside func"
  console.log(stuff);

}

fun()
console.log(stuff);
