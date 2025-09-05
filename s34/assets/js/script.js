let fruits = ["manzana", "banana", "cereza", "durazno", "kiwi"];
console.log(fruits);

console.log("push");
fruits.push("naranja");
console.log(fruits);

console.log("pop");
fruits.pop();
console.log(fruits);

console.log("unshift");
fruits.unshift("uva");
console.log(fruits);

console.log("shift");   

let deletedItem = fruits.shift();
console.log(`Elemento eliminado: ${deletedItem}`);
console.log(fruits);

console.log("includes");
console.log(fruits.includes("banana"));
console.log(fruits.includes("mango"));

console.log("indexOf");
console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("mango"));

console.log("join");
console.log(fruits.join());
console.log(fruits.join(" - "));
console.log(fruits.join(" * "));
console.log(fruits.join(" / "));
console.log(fruits.join(" | "));
console.log(fruits.join(" ~ "));
console.log(fruits.join(""));

console.log("slice");
console.log(fruits.slice(2));
console.log(fruits.slice(2, 4));

console.log("splice");
fruits.splice(2, 2, "mango", "papaya", "piña");
console.log(fruits);