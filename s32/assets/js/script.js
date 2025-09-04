class Person {
    #cellphone;
    constructor(name, age, occupation, nationality, weight, height, hobby, cellphone) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.nationality = nationality;
        this.hobby = hobby;
        this.weight = weight; 
        this.height = height;
        this.#cellphone = cellphone;
     }   

     sayhello() {
        console.log("Hola a todos, saludo desde el metodo de la clase Person");    
     }

     introduceMyself() {
        return `Hola, mi nombre es ${this.name}, tengo ${this.age} años, soy una ${this.occupation} y mi nacionalidad es ${this.nationality}.`;
    }

    getCellphone() {
        return this.#cellphone;
    }
}

let person1 = new Person("Niurka", 17, "Estudiante", "Peruana", "Pintar", 50, 1.53, "987654321"); 

console.log(person1);

console.log (person1.name);
console.log (person1.age);
console.log (person1.occupation);
console.log (person1.nationality);
console.log (person1.hobby);
console.log (person1.weight);
console.log (person1.height);
console.log (person1.getCellphone());


console.log ("Metodos");
person1.sayhello();
console.log (person1.introduceMyself());

console.log ("Encapsulamiento");
//console.log (person1.#cellphone);



console.log ("Herencia");
class chef extends Person 
{
    constructor(name, age, occupation, nationality, weight, height, hobby, cellphone, restaurant, favoriteFood) 
    {

        super(name, age, occupation, nationality, weight, height, hobby, cellphone);
        this.restaurant = restaurant;
        this.favoriteFood = favoriteFood;
    }  
    
    introduceMyself

 }

let chef1 = new chef("Gordon Ramsay", 54, "Chef", "Britanico", 80, 1.81, "Cocinar", "123456789", "Hell's Kitchen", "Beef Wellington");
console.log(chef1);

console.log (chef1.name);
console.log (chef1.age);
console.log (chef1.occupation);
console.log (chef1.nationality);
console.log (chef1.hobby);
console.log (chef1.weight); 
console.log (chef1.height);
console.log (chef1.getCellphone());
console.log (chef1.restaurant);
console.log (chef1.favoriteFood);