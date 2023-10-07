// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}`;

}

// Место для второй задачи
function returnNeighboringNumbers(number) {
    let arr = [];
    for (let i = number - 1; i <= number + 1; i++) {
        arr.push(i);
    }
    // console.log(arr);
    return arr;

}
// returnNeighboringNumbers(6);
// Место для третьей задачи

function getMathResult(a, b) {
    let answer = a;
    if (b <= 0 || typeof b != 'number' || b == 1) {
        console.log(answer);
        return answer;
    }
    for (let i = 2; i <= b; i++) {
        answer += '---' + a * i;
    }
    console.log(answer);
    return answer;
}

getMathResult(5, 3);