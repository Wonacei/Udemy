const students = ['Peter', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Don', 'Marry'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let other = 'Оставшиеся студенты: ';
    let finishArr = [[], [], []];
    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            finishArr[0].push(arr[i]);
        }
        if (i < 6 && i >= 3) {
            finishArr[1].push(arr[i]);
        }
        if (i < 9 && i >= 6) {
            finishArr[2].push(arr[i]);
        }
        if (arr.length == 9 && i == 8) {
            other += '-';

        } else if (i >= 9) {
            other += arr[i];

        }
        if (i >= 9 && i < arr.length - 1) {
            other += ', ';

        }
    }
    finishArr.push(other);
    return finishArr;
}

console.log(sortStudentsByGroups(students));