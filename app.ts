
function withTemplate(hookId: string, template: string) {
	return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
		return class extends originalConstructor {
			constructor(...argums: any[]) {
				super(...argums);
				const $id = document.getElementById(hookId)! as HTMLElement;
				$id.innerHTML = template;
				document.querySelector('h1')!.textContent = this.name; // Dhilip
			}
		}
	}
}

@withTemplate('app', '<h1>My Person</h1>')
class Person {
	name = 'Dhilip';

	getName() {
		return this.name;
	}
}

function AutoBindThis(_: any, _2: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			// `this` always refers to the object on which the current method is attached to
			// not afected by addeventlistenr's `this`
			const boundedMethod = originalMethod.bind(this); 
			return boundedMethod;
		}
	};
	return adjDescriptor;
}

class Printer {
	message = 'This Works';

	@AutoBindThis
	showMsg() {
		console.log(this.message);
	}
}

const p = new Printer();
const button = document.getElementById('btn')! as HTMLButtonElement;
button.addEventListener('click', p.showMsg);