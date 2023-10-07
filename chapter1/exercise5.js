const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = lines; i >= 0; i--) {

    for (let k = i; k >= 0; k--) {
        if (k > 0) {
            result = result + ' ';
        } else {
            result = result + '*';
        }
    }

    for (let j = (lines - i) * 2; j >= 0; j--) {
        if (j > 0) {
            result = result + '*';
        } else {
            result = result + '\n';
        }
    }

}