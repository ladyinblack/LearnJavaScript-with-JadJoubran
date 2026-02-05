/**
 * @param {string} age
 */
function getNextAge(age) {
    if (age === "") {
        return 0;
    } else {
        return Number.parseInt(age, 10) + 1;
    }
}