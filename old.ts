// interface Greetable {
// 	name: string;

// 	greet(phrase: string): void;
// }

// class Person implements Greetable {
// 	name: string;
// 	age = 30;

// 	constructor(n: string) {
// 		this.name = n;
// 	}

// 	greet(phrase: string) {
// 		console.log(phrase + ' ' + this.name);
// 	}
// }

// let user1: Greetable;

// user1 = new Person('Max');

// user1.greet('Hi there - I am');
// console.log(user1);



interface Admin {
	name: string;
	privileges: string[];
}

interface Employee {
	name: string;
	startDate: Date;
}

type unknownEmp = Admin | Employee;

function print(emp: unknownEmp) {
	console.log(emp.name);
	if ('startDate' in emp) {		// type guard
		console.log(emp.startDate);
	}
}


interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';
	runningSpeed: number;
}

type Animal = Bird | Horse;

function log(anim: Animal) {
	switch (anim.type) {
		case 'bird':
			console.log(anim.flyingSpeed);
			break;
		case 'horse':
			console.log(anim.runningSpeed);
			break;
	}
}

// const $input = document.getElementById('inputElt')! as HTMLInputElement;
// $input.value = "ff";

//  if $input could be null
const $input = document.getElementById('inputElt');
if ($input) {
	($input as HTMLInputElement).value = "ff";
}



// When you dont know the property name but you know the type
// Note => it can have predefined property names but the types defined
// for index typing should match with predefined properties as well 

interface ErrorContainer {
	[prop: string]: string;
}

const Errors: ErrorContainer = {
	username: 'missing',
	code: 'Invalid'
}

interface CourseGoal {
	title: string,
	date: Date
}

function createGoal(title: string, date: Date): CourseGoal {
	// Type '{}' is missing the following properties from type 'CourseGoal': title
	// const courseGoal: CourseGoal = {};
	const courseGoal: Partial<CourseGoal> = {}
	courseGoal.title = title;
	courseGoal.date = date;
	return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Dhilip'];
names.push('f'); // Property 'push' does not exist on type 'readonly string[]