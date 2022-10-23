// Creating 1st Class
class Animal {
  constructor(animal, color, birth) {
    this.animal = animal;
    this.color = color;
    this.birth = birth;
    this.isWashed = false;
  }
  // Method
  heardLike(sound) {
    console.log(`This animal is ${sound}`);
  }
}

//Creating 2nd Class
class ZooClean {
  constructor(date, time, employee) {
    this.date = date;
    this.time = time;
    this.employee = employee;
  }
  // Method which can communicate with 1st Class
  washAnimal(animal, name, time) {
    animal.isWashed = true;
    console.log(`${name} just washed a/an ${animal.animal} ${time}`);
  }
}

// Animal's instances
const elefant = new Animal('elefant', 'grey', 'North Africa');
const tiger = new Animal('tiger', 'white', 'India');

// ZooClean's instances
const weeklyClean = new ZooClean('every Monday', 'at 11AM', 'Igor');
const yearlyClean = new ZooClean('June', 'at 7AM', 'Stela');

// Calling Animal's methods
tiger.heardLike('growls');
elefant.heardLike('trumpets');

// Calling employees
weeklyClean.washAnimal(elefant, weeklyClean.employee, weeklyClean.time);
yearlyClean.washAnimal(tiger, yearlyClean.employee, yearlyClean.time);
