/**
 * @param {array} apps 
 */
function useCalculator(apps) {
    apps.push("Calculator");
    return apps;
}

// Sample usage - do not modify
console.log(useCalculator(["Clock", "Twitter"]));
console.log(useCalculator(["Weather"]));