/** 
 * @param {number[]} grades
 */
function getNumberOfGrades(grades) {
    // TODO: return the number of grades
    return grades.length;
}

/** 
 * @param {number[]} grades
 */
function getSumGrades(grades) {
    // TODO: return the sum of all the grades
    let sum = 0;
    grades.forEach(function(grade) {
        sum += grade;
    });
    return sum;
}

/** 
 * @param {number[]} grades
 */
function getAverageValue(grades) {
    // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
    return getSumGrades(grades) / getNumberOfGrades(grades);
}

/** 
 * @param {number[]} grades
 */
function getPassingGrades(grades) {
    // TODO: return all passing grades (10 and above)
    const passedGrades = grades.filter(function(grade) {
        if (grade >= 10) {
            return grade;
        }
    });
    return passedGrades;
}

/** 
 * @param {number[]} grades
 */
function getFailingGrades(grades) {
    // TODO: return all failing grades (9 and below)
    const failedGrades = grades.filter(function(grade) {
        if (grade < 10) {
            return grade;
        }
    });
    return failedGrades;
}

/** 
 * @param {number[]} grades
 */
function getRaisedGrades(grades) {
    // TODO: return all the grades raised by 1 (no grade should exceed 20)
    const raisedGrades = grades.map(function(grade) {
        if (grade < 20) {
            return grade + 1;
        } else {
            return grade;
        }
    });
    return raisedGrades;
}