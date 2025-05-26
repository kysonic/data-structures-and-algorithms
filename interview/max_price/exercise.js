import assert from 'node:assert/strict';

// Дан массив цен биржевой акции по дням (первый элемент массива 1-ое число месяца и тд),
// задача посчитать максимальную выгоду которую можно найти купи и продав акцию один раз.
function maxProfit(prices) {
    
}

// Базовый кейс
assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
// Пустой массив
assert.equal(maxProfit([]), 0);
// Нисходящий
assert.equal(maxProfit([7, 6, 5, 4, 3, 2, 1]), 0);

console.log('Прошло с кайфом!');
