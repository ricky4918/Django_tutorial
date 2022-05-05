var country1 = "USA"
var country2 = "Germany"
var country3 = "China"

var countries = [country1, country2, country3]

console.log(countries);
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);

//mutable
countries[2] = "france"
console.log(countries[2]);

//immuable
console.log(country1[2]);
country1[2] = "B"
console.log(country1[2]);



//mixed data type
var mixed = [true, 20, "three"]
console.log(mixed);
console.log(mixed.length);


var myArr = ['one', 'two', 'three']

var lastItem = myArr.pop()
var mittleItem = myArr.pop(myArr[1])
console.log(lastItem);
console.log(mittleItem);

myArr.push("New Item")
console.log(myArr);



var arry = [1,2,3,4,5,6,7,7,8,8,9]
for (var i = 0; i < arry.length; i++) {
  console.log(arry[i]);
}
for (num of arry) {
  console.log(num);
}

// for (letter of myArr){
//   alert(letter)
// }
// myArr.forEach(alert)
function addAwesome(name) {
  console.log(name + " is awesome!");
}
console.log(addAwesome("django"));


var topics = ["python", "django", "science"]

topics.forEach(addAwesome)
