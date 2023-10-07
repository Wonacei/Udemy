const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length > 0) {
        let str = "Семья состоит из:";
        for (let val of arr) { str += " " + val; }
        return str;
    }


    else { return "Семья пуста"; }
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function (val) { console.log(val.toLowerCase()); });
}

