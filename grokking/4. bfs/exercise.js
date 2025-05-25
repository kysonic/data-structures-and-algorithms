import assert from 'node:assert/strict';
// Направленный (как и ненаправленный) Граф в JavaScript можно представить в виде объекта 
// Для простоты мы задаем только имя, уникально
const graph = {};
// Связи
graph['Anton'] = ['Liza', 'Elena', 'Alexey'];
graph['Liza'] = ['Dmitry', 'Ivan', 'Ekaterina'];
graph['Elena'] = ['Igor', 'Maxim', 'Ivan'];
graph['Аlexey'] = ['Maxim'];
graph['Dmitry'] = [];
graph['Ivan'] = ['Anton'];
graph['Ekaterina'] = ['Igor'];
graph['Igor'] = [];
graph['Maxim'] = ['Elena'];
graph['Ivan'] = ['Liza'];


// BFS - Breadth-First Search - Поиск в ширину
// Основная идея поиск по уровню графа, то есть сначала ищем на первом уровне потом на втором 
// потом на третьем, пока на найдем
function bfs(graph, element) {

}

// 
assert.deepStrictEqual(bfs(graph, element), []);

console.log('Прошло!');
