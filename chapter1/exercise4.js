// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let j = 0; j < data.length; j++) {
        if (typeof data[j] === 'number') {
            data[j] = data[j] * 2;
        }
        if (typeof data[j] === 'string') {
            data[j] = `${data[j]} - done`;
        }

        //     typeof data[j];
    }

    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    // for (let k=0; k<data.length; k++) {
    //     result[k] = data[data.length-1-k];
    // }

    for (let k = data.length - 1; k >= 0; k--) {
        result.push(data[k]);
    }
    // Не трогаем
    return result;
}