var Cache = require('cache');

console.log(typeof Cache);
var f = new Cache(function (a, b, c, d) {return 2*a});

/*console.log('2: ', f(2));
console.log('14:', f(1, 4));*/

console.log('A 2:', f(2), '\n\n\n\n');
console.log('A 14: ', f(1, 4), '\n\n\n\n');
console.log('A 613: ', f(6, 1, 3), '\n\n\n\n');
console.log('A 123456789', f(1, 2, 3, 4, 5, 6, 7, 8, 9), '\n\n\n\n');

console.log('\n\n==============================');
console.log('==============================');
console.log('==============================\n\n');

console.log('B 2:', f(2), '\n\n\n\n');
console.log('B 14: ', f(1, 4), '\n\n\n\n');
console.log('B 613: ', f(6, 1, 3), '\n\n\n\n');
console.log('B 123456789', f(1, 2, 3, 4, 5, 6, 7, 8, 9), '\n\n\n\n');

/*console.log(f(2));
console.log(f(1, 4));
console.log(f(6, 1, 3));
console.log(f(5, 4, 3, 2));*/