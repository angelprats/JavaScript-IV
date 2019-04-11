// CODE here for your Lambda Classes

class Person {
  constructor(element) {
    this.name = element.name;
    this.age = element.age;
    this.location = element.location;
    this.gender = element.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(element) {
    super(element);
    this.specialty = element.specialty;
    this.favLanguage = element.favLanguage;
    this.catchPhrase = element.catchPhrase;
  }

  listSubjects() {}

  PRAssignment() {}

  sprintChallenge() {}
}

class Student extends Person {
  constructor(element) {
    super(element);
    this.name = element.name;
    this.age = element.age;
    this.location = element.location;
    this.gender = element.gender;
    this.previousBackground = element.previousBackground;
    this.className = element.className;
    this.favSubjects = element.favSubjects;
  }

  listsSubjects() {}

  PRAssignment() {}

  sprintChallenge() {}
}

class ProjectManager extends Instructor {
  constructor(element) {
    super(element);
    this.gradClassName = element.gradClassName;
    this.favInstructor = element.favInstructor;
  }

  standUp() {}

  debugsCode() {}
}

const Mike = new Instructor({
  name: 'Mike',
  location: 'CodeCity',
  age: 235,
  gender: 'male',
  specialty: 'Front-end',
  favLanguage: 'Python',
  catchPhrase: `City Of Codes`,
});

const Steve = new ProjectManager({
  name: 'Steve',
  location: 'Program Town',
  age: 175,
  gender: 'male',
  gradClassName: 'Web-18',
  favLanguage: 'Javascript',
  favInstructor: `Tom`,
});
