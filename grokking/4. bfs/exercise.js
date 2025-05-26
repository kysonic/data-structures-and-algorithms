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
function bfs(graph, a, b) {
  
}

//
assert.deepStrictEqual(bfs(graph, 'Anton', 'Kushka'), true);

console.log('Прошло!');
