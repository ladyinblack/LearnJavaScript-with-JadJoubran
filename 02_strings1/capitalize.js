/**
 * @param {string} word
 */
function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

// Sample usage - do not modify
console.log(capitalize("sam"));
console.log(capitalize("ALEX"));
console.log(capitalize("chARLie"));
