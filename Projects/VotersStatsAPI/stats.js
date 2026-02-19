/**
 * @param {number[]} ages
 */
function getVotersCount(ages) {
    console.log(ages);
    let voters = ages.filter(function(age) {
        if (age >= 18) {
            return age;
        }
    }).length;
    return voters;
}