import assert from 'node:assert/strict';
// Направленный (как и ненаправленный) Граф в JavaScript можно представить в виде объекта
// Для простоты мы задаем только имя, уникально
const graph = {};
// Связи
graph['Anton'] = ['Liza', 'Elena', 'Alexey'];
graph['Liza'] = ['Dmitry', 'Ivan', 'Ekaterina'];
graph['Elena'] = ['Igor', 'Maxim'];
graph['Alexey'] = ['Bob', 'Natasha'];
graph['Dmitry'] = ['Robert', 'John'];
graph['Ivan'] = ['Goodvin'];
graph['Ekaterina'] = ['Snoop'];
graph['Igor'] = ['Leps'];
graph['Maxim'] = ['Geil'];

// DFS - Deep-First Search - Поиск в глубину
// Пройтись до конца одной ветки, всегда идти например влево, потом
// выйти на уровень вверх и взять следующий узел, если он есть и так до тех пор
// пока не будет найдет элемент или граф не закончится
function dfs(graph, a, b) {
    const current = graph[a];

    if (!current?.length) {
        return false;
    }

    for (let node of current) {
        if (node === b) {
            return true;
        }

        let result = dfs(graph, node, b);

        if (result) {
            return true;
        }
    }

    return false;
}

// Можно ли добраться от узла A до B
assert.deepStrictEqual(dfs(graph, 'Anton', 'Geil'), true);
assert.deepStrictEqual(dfs(graph, 'Igor', 'Goodvin'), false);

console.log('Прошло!');
