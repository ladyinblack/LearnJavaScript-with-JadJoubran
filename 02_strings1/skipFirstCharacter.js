/**
 * Complete the function skipFirstCharacter such that it returns all the characters except the first one from the text parameter it receives.
 * 
 * @param {string} text
 */
function skipFirstCharacter(text) {
    return text.substring(1, text.length);
}

// Sample usage - do not modify
console.log(skipFirstCharacter("Xcode"));
console.log(skipFirstCharacter("Hello"));