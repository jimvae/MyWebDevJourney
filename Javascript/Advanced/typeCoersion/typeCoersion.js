1 == '1'; //returns true
1 === '1'; // returns false
// if different types, then it forces the left side to change
// 'coerces the other side'
// stick to '===', less complicated


// corner cases
+0 === -0 // true
Object.is(+0, -0); //false
NaN === NaN; // false
Object.is(NaN, NaN); //true