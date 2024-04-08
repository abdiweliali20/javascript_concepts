let schools=["zindua","momo","mme","yoyo"];
// console.log(schools);

// console.log(schools[1])

console.log(schools.length)
console.log(schools[schools.length -2])

schools[1]="jeep"
console.log(schools)
//add last
schools.push("strathmore");
console.log(schools)
//add first
schools.unshift("zetech")
console.log(schools)
//remove last
schools.pop();
console.log(schools);
//remove first
schools.shift();
console.log(schools)
//remove centre
schools.splice(1,2);
console.log(schools)