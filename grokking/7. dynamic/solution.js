import assert from 'node:assert/strict';
// Задача: Найти максимальную подстроку входящую в данную используя метод динамического программирования
function lcs(string1, string2) {
    // Обрабатываем эджкейс
    if (!string1 || !string2) {
        return {
            lcs: 0,
            offset: 0,
            sequence: '',
        };
    }
    // Количество букв на пересечении
    let lcs = 0;
    let lastSubIndex = 0;
    // Заполняем таблицу динамического программирования нулями
    // Длина на 1 больше тк мы идем по диагонали, и ячейки не хватит, если мы в конце
    let table = Array(string1.length + 1)
        .fill(null)
        .map(() => Array(string2.length + 1).fill(0));
    // HISH/FISH
    // [0, 0, 0, 0, 0]
    // [0, 0, 0, 0, 0]
    // [0, 0, 0, 0, 0]
    // [0, 0, 0, 0, 0]
    // [0, 0, 0, 0, 0]

    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            // Совпадение
            if (string1[i] === string2[j]) {
                // Текущее значение 0
                if (table[i][j] === 0) {
                    // По диагонали тогда 1
                    table[i + 1][j + 1] = 1;
                } else {
                    // Если не 0 то суммируем
                    table[i + 1][j + 1] = table[i][j] + 1;
                }
                // Сохраняем максимальное значение 
                if (table[i + 1][j + 1] > lcs) {
                    lcs = table[i + 1][j + 1];
                    lastSubIndex = i;
                }
            } else {
                // Иначе обнуляем (нужно чтобы найти именно последовательность, а если одна, потом нет, потом одна - не нужно)
                table[i + 1][j + 1] = 0;
            }
        }
    }

    // HISH/FISH
    // [0, 0, 0, 0, 0]
    // [0, 0, 0, 0, 1]
    // [0, 0, 1, 0, 0]
    // [0, 0, 0, 2, 0]
    // [0, 0, 0, 0, 3]

    return {
        lcs: lcs,
        offset: lastSubIndex - lcs + 1,
        sequence: string1.slice(lastSubIndex - lcs + 1, lastSubIndex + 1),
    };
}

assert.deepStrictEqual(lcs('hish', 'fish'), { lcs: 3, offset: 1, sequence: 'ish' });
assert.deepStrictEqual(lcs('vista', 'hish'), { lcs: 2, offset: 1, sequence: 'is' });
assert.deepStrictEqual(lcs('google', 'abcdefgooglehijklm'), { lcs: 6, offset: 0, sequence: 'google' });
assert.deepStrictEqual(lcs('0', 0), { lcs: 0, offset: 0, sequence: '' });
console.log('S kaifom!');
