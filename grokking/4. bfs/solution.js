import assert from 'node:assert/strict';
// Направленный (как и ненаправленный) Граф в JavaScript можно представить в виде объекта
// Для простоты мы задаем только имя, уникально
const graph = {};
// Связи
graph['Anton'] = ['Liza', 'Elena', 'Alexey'];
graph['Liza'] = ['Dmitry', 'Ivan', 'Ekaterina'];
graph['Elena'] = ['Igor', 'Maxim', 'Ivan'];
graph['Alexey'] = ['Maxim'];
graph['Dmitry'] = [];
graph['Ivan'] = ['Anton'];
graph['Ekaterina'] = ['Igor'];
graph['Igor'] = [];
graph['Maxim'] = ['Elena'];

// BFS - Breadth-First Search - Поиск в ширину
// Основная идея поиск по уровню графа, то есть сначала ищем на первом уровне потом на втором
// потом на третьем, пока на найдем. Более оптимальный вариант работы - использование очереди
// в JavaScript очередь (как и стек) можно реализовать с помощью обычного массива
// Важный момент - запоминаем кого уже проверили, иначе можно войти в бесконечный цикл
function bfs(graph, a, b) {
    const queue = graph[a];
    const searched = new Set();

    while (queue.length) {
        const elem = queue.shift();

        if (searched.has(elem)) {
            continue;
        }

        searched.add(elem);

        if (elem === b) {
            // Тут может быть функция проверка любого условия
            return true;
        }

        queue.push(...graph[elem]);
    }

    return false;
}

// Можно ли добраться от узла A до B 
assert.deepStrictEqual(bfs(graph, 'Anton', 'Kushka'), true);

console.log('Прошло!');
