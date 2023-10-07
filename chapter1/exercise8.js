// Место для первой задачи
function getTimeFromMinutes(minuteTime) {
    if (minuteTime >= 0 && Number.isInteger(minuteTime)) {
        let hourTime = Math.floor(minuteTime / 60);
        let minConvTime = minuteTime - (hourTime * 60);
        let strHour = function () {
            if ((hourTime > 10 && hourTime < 20) || (hourTime % 10 >= 5 && hourTime % 10 <= 9) || hourTime % 10 === 0) {
                return 'часов';
            } else if (hourTime % 10 >= 2 && hourTime % 10 < 5) {
                return 'часа';
            } else {
                return 'час';
            }
        };
        return `Это ${hourTime} ${strHour()} и ${minConvTime} минут`;
    } else {
        return 'Ошибка, проверьте данные';
    }

}

// Место для второй задачи
function findMaxNumber(num1, num2, num3, num4) {
    let arr = [num1, num2, num3, num4];
    let bigger = 0;
    for (let val of arr) {
        if (typeof val != 'number') {
            return 0;
        }
        if (val > bigger) {
            bigger = val;
        }
    }

    return bigger;
}