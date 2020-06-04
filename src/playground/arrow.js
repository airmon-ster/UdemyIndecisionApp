// const square = function (x) {
//     return x * x;
// };

// const squareArrow = (y) => {
//     return y * y;
// }

// const squareRow = (z) => z * z;

// const fullName = 'Nani Bear';
// const nameDelimit = (fullName) => fullName.split(' ')[0]

// const firstName = nameDelimit(fullName);

// console.log(square(2));
// console.log(squareArrow(8));
// console.log(squareRow(9));
// console.log(firstName);

// const user = {
//     name: 'Nani',
//     cities: ['Pasadena','Dallas','Martinez'],
//     printPlacesLived() {
//         return this.cities.map((city) => this.name + ' has lived in ' + city);
//     }
// };
// console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,3,5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())