// Место для первой задачи
function calculateVolumeAndArea(a) {
    if (typeof (a) !== 'number' || isNaN(a) || a <= 0 || !Number.isInteger(a)) {
        return 'При вычислении произошла ошибка';
    } else {
        return `Объем куба: ${a * a * a}, площадь всей поверхности: ${a * a * 6}`;
    }
}

// Место для второй задачи
function getCoupeNumber(b) {
    if (b > 0 && b < 37 && Number.isInteger(b)) {
        return 1 + Math.floor(b / 4);
    } else if (typeof (b) !== 'number' || b < 0 || !Number.isInteger(b)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if (b === 0 || b > 36) {
        return 'Таких мест в вагоне не существует';
    }
}