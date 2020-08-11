
// REMINDER
// JavaScript does not have classes, the way that Java and other languages have classes; 
// JavaScript's class is (mostly) just syntactical sugar for prototypes, which are very different from traditional classes.
// Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// "Instantiating" a class in JavaScript does create a new object, but not one that is independent of its parent class.

class Food {

    constructor (name, protein, carbs, fat)
    {
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;

    }

    toString = () => {
        return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`
    }

    print = () => {
        console.log(this.toString() );
      }
    
}

// Constructor Call
const chicken_breast = new Food('Chicken Breast', 26, 0, 3.5); 

console.log(chicken_breast)

chicken_breast.print(); // 'Chicken Breast | 26g P :: 0g C :: 3.5g F'

console.log(chicken_breast.protein); // 26 (LINE A)


// Subclass or aka Derived class from Food  

class FatFreeFood extends Food {

    constructor (name, protein, carbs) 
    {
        super(name, protein, carbs, 0);
    }

    print () {
        super.print(); 
        console.log(`Would you look at that -- ${this.name} has no fat!`);
    }

}

const fat_free_yogurt = new FatFreeFood('Greek Yogurt', 16, 12);

fat_free_yogurt.print(); // 'Greek Yogurt | 26g P :: 16g C :: 0g F  /  Would you look at that -- Greek Yogurt has no fat!'

