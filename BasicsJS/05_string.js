const name = "John";
const repoCount = 50;

console.log(name + repoCount + " repos") 
// this will print "John50 repos" because of type coercion. JS will convert repoCount to string and concatenate it with name and " repos"
console.log(`Hello my Name is : ${name} and i Have ${repoCount} repos`) //this is string interpolation


const gameName= new String("Nikhil") // this is a string object, not a primitive string
console.log(gameName[0]);
console.log(gameName[1]) // this will print "i" because gameName is a string object and we can access its characters using index

console.log(typeof gameName) // this will print "object" because gameName is a string object, not a primitive string

console.log(gameName.__proto__) // this will print the prototype of the string object, which is String.prototype. It contains all the methods and properties of the string object
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2))
console.log(gameName.charAt(3))

console.log(gameName.indexOf("h")) // this will print 1 because "h" is at index 1 in the string "Nikhil"
console.log(gameName.indexOf("k")) // this will print 2 because "k" is at index 2 in the string "Nikhil"
console.log(gameName.indexOf("z")) // this will print -1 because "z" is not present in the string "Nikhil"

const otherString = "Nikhil Vishwakarma"
console.log(otherString.substring(0, 5)) // this will print "Nikhil" because substring method returns the part of the string between the start and end index


const newString = "   Nikhil Vishwakarma   "
console.log(newString.toLowerCase()) // this will print "   nikhil vishwakarma   " because toLowerCase method converts all the characters of the string to lowercase
console.log(newString.trim()) // this will print "Nikhil Vishwakarma" because trim method removes the whitespace from both ends of the string

const url ="https://www.nikhil.com/nikhil%20vishwakarma";
console.log(url.split("/")) // this will print ["https:", "", "www.nikhil.com", "nikhil%20vishwakarma"] because split method splits the string into an array of substrings based on the specified separator, which is "/" in this case
console.log(url.split("%20")) // this will print ["https://www.nikhil.com/nikhil", "vishwakarma"] because split method splits the string into an array of substrings based on the specified separator, which is "%20" in this case
console.log(url.replace("nikhil", "john")) // this will print "https://www.john.com/john%20vishwakarma" because replace method replaces the first occurrence of the specified value with another value, which is "john" in this case
console.log(url.replace("%20", "-"))
console.log(url.includes("nikhil"))