var carInfo = {make: "toyota", year: 1990, model:"Camry"}
console.log(carInfo);
console.log(carInfo["make"]);


var myNewObject = {a: "hello", b:[1,2,3], c:{inside: ["a", "b"]}}
console.log(myNewObject);
console.log(myNewObject["c"]["inside"][1]);


carInfo["year"] = 2006
console.log(carInfo);
carInfo["year"] += 1
console.log(carInfo);

console.dir(carInfo);



for (key in carInfo){
  console.log(key);
  console.log(carInfo[key]);
}


var simple = {
  prop: "hello",
  myMethod: function(){
      console.log("The myMethod was called");
  }
}

console.dir(simple);
console.log(simple.myMethod());




var myobj = {
  name:  "jose",
  greet: function(){
    console.log("hello "+ this.name);
  }
}

console.log(myobj.greet());
