import {GetAgeComponent, GetYearOfBirthDecorator, GetCurrYearDecorator} from "./Decorator";
import {Age} from "./types";
import {Facade, Name} from "./Facade";
import {Creator} from "./Factory";

/* here we have example with decorator*/
/* BE CAREFUL!! ⚠️ This calculation is absolutely useless and was written because of poor imagination 😒 */
console.log('Decorator Results:');
export function getResult(component: Age, resultDetail:string) {
    return `${resultDetail}: ${component.calcAge()}`;
}

const age = new GetAgeComponent(1997);
const birth = new GetYearOfBirthDecorator(age);
const currentYear = new GetCurrYearDecorator(birth);


console.log(getResult(age, 'Age'), getResult(birth, 'Birth'), getResult(currentYear, 'Current year (in case you forgot 😬)'));
/* here we have example with decorator*/

// /* here we have example with facade*/
console.log('Facade Results:');
const name = new Name('Kateryna', 'Nakonechna');
const facade = new Facade(name, age, birth);

console.log(facade.getUserDate());
/* here we have example with facade*/

/* here we have example with factory*/
console.log('Factory Results:');
function getFactoryData(creator: Creator) {
    console.log(creator.someOperation());
}

class Creator1 extends Creator {
    public factoryMethod(): Age {
        return age;
    }
}

class Creator2 extends Creator {
    public factoryMethod(): Age {
        return currentYear;
    }
}


getFactoryData(new Creator1());
getFactoryData(new Creator2());
/* here we have example with factory*/