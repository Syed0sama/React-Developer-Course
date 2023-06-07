const add = (a, b) => {
    //console.log(arguments)
    return a + b;
}

const user = {
    name: 'Osama',
    cities: ['Islamabad', 'Rawalpindi', 'Peshawar'],
    printPlaceLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
       // this.cities.forEach((city) => {
         //   console.log(this.name + 'has lived in ' + city);
        }
    }
console.log(user.printPlaceLived());

//to use this.property we have to use es5 functions that is with function keyword. we cannot use arrow function if we want to use this property

const multiplier = {
    numbers:[2 , 6 , 3 , 10],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number)
        }
    }
console.log(multiplier.multiply());
