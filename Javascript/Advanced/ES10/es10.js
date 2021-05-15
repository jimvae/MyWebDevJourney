// flat()
const array = [1,[2,3],[4,[5]]];
array.flat(); //returns [1,2,3,4,[5]]

array.flat(2) // returns [1,2,3,4,5]

const entries = ['bob','sally', , , , , 'cindy'];
entries.flat() //returns ['bob', 'sally, 'cindy']

// flatMap -> mapping to the flatten array
const array2 = array.flatMap(creature => creature + "!");

// trim start and trim end
const userEmail = '         eddy@gmail.com';
const userEmail2 = 'jonnybanana@gmail.com          ';
userEmail.trimStart();
userEmail2.trimEnd();


// formEntries
const userProfiles = [['commanderTom', 23], ['liutenantBob', 40]];

const a = Object.fromEntries(userProfiles);
// Converts them into entries

// converts them back to array
Object.entries(a);


// try catch block
try {
    // is there are any errors, then do something in the catch block
    // 
} catch {

}

// before
try {
    // is there are any errors, then do something in the catch block
    // 
} catch (error) {
    console.log(error);
}