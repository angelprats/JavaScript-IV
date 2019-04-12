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

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(element) {
    super(element);
    this.previousBackground = element.previousBackground;
    this.className = element.className;
    this.favSubjects = element.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach(element => {
      console.log(element);
    });
  }

  PRAssignment(subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(element) {
    super(element);
    this.gradClassName = element.gradClassName;
    this.favInstructor = element.favInstructor;
  }

  standUp(channel) {
    console.log(`${name} announces to ${channel}, @channel standby times!`);
  }

  debugsCode(subject) {
    console.log(`${name} debugs ${student.name}'s code on ${subject}`);
  }
}

const mike = new Instructor({
  name: 'Mike',
  location: 'CodeCity',
  age: 235,
  gender: 'male',
  specialty: 'React',
  favLanguage: 'Python',
  catchPhrase: `City Of Codes`,
});

const steve = new ProjectManager({
  name: 'Steve',
  location: 'Program Town',
  age: 175,
  gender: 'male',
  gradClassName: 'Web-18',
  favLanguage: 'Javascript',
  favInstructor: `Tom`,
});

const amber = new Student({
  name: 'Amber',
  location: 'React Street',
  age: 25,
  gender: 'female',
  previousBackground: 'Electrician',
  className: 'Web-19',
  favSubject: ['HTML', 'CSS', 'Javascript'],
});

mike.speak();
mike.demo('Javascript');
mike.grade(amber, 'HTML');

amber.listsSubjects();
amber.sprintChallenge('React');
amber.PRAssignment('Semantic HTML');

steve.standUp('Steve', 'Slack');
steve.debugsCode('#CSS');
