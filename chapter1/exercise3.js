// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }

}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let j = 20; j > 10; j--) {
        if (j === 13) {
            break;
        }
        console.log(j);
    }

}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let k = 2; k <= 10; k++) {
        if ((k % 2) === 0) {
            console.log(k);
        }
    }

}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let h = 2;
    while (h <= 16) {
        if (h % 2 === 0) {
            h++;
            continue;
        } else {
            console.log(h);
            h++;
        }
    }
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let g = 5; g <= 10; g++) {
        arrayOfNumbers[g - 5] = g;
    }


    // Не трогаем
    return arrayOfNumbers;
}