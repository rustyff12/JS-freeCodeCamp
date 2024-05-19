// 1. Get the average of all the results regardless of input length

function getAverage(scores) {
    let total = 0;
    for (const score of scores) {
        total += score;
    }

    return total / scores.length;
}

/* console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // 71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); // 85.4
 */
// 2. Return a string representing the grade

/*
Score Range	Grade
100	"A++"
90 - 99	"A"
80 - 89	"B"
70 - 79	"C"
60 - 69	"D"
0 - 59	"F"
*/

function getGrade(score) {
    /* if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else if (score < 60) {
        return "F";
    } */
    // Switch version
    switch (true) {
        case score === 100:
            return "A++";
        case score >= 90:
            return "A";
        case score >= 80:
            return "B";
        case score >= 70:
            return "C";
        case score >= 60:
            return "D";
        case score < 60:
            return "F";
        default:
            return "Invalid score";
    }
}

/* console.log(getGrade(96)); // A
console.log(getGrade(82)); // B
console.log(getGrade(56)); // F
console.log(getGrade(100)); // A++
console.log(getGrade(70)); // C */

// 3. Passing grade

function hasPassingGrade(score) {
    const isPassing = getGrade(score);
    if (isPassing !== "F") {
        return true;
    }

    return false;
}

/* console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87)); */

// 4. Final message

function studentMsg(totalScores, studentScore) {
    const classAverage = getAverage(totalScores);
    const studentGrade = getGrade(studentScore);

    if (hasPassingGrade(studentScore)) {
        return (
            "Class average: " +
            classAverage +
            ". Your grade: " +
            studentGrade +
            ". You passed the course."
        );
    } else {
        return (
            "Class average: " +
            classAverage +
            ". Your grade: " +
            studentGrade +
            ". You failed the course."
        );
    }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
