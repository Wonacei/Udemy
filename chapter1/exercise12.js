const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) != 'string') {
        return 'Ошибка!';
    }
    return str.split('').reverse().join('');

}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

    if (arr.length === 0) {
        return 'Нет доступных валют';
    }
    let str = 'Доступные валюты:\n';
    for (let val of arr) {
        if (val == missingCurr) {
            continue;
        }
        str += val + '\n';
    }
    return str;
}