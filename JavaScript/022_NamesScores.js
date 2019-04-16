const fs = require('fs');

// Read the textfile into a string.
const names = fs.readFileSync('022_names.txt', 'utf8')
// Split the string on every comma and remove the quotes
    .split(',').map(name => name.replace(/"/g, ''))
    // Sort the names.
    .sort();

//console.log(names);

// Get the alphabetical value by adding the chars position in
// the alphabet. A = Char Code 65 = Alphabet Position 1.
const getAlphabeticalValue = name => name.split('')
    .reduce((memo, item) => memo + item.charCodeAt(0) - 64, 0);

const result = names.reduce((memo, item, index) =>
    memo + getAlphabeticalValue(item) * (index + 1), 0);

console.log(result);



