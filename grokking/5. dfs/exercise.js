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
graph['Ivan'] = ['Igor'];
graph['Ekaterina'] = ['Snoop'];
graph['Igor'] = ['Leps'];
graph['Maxim'] = ['Geil'];


// DFS - Deep-First Search - Поиск в глубину
// 
function dfs(graph, a, b) {
    
}

// Можно ли добраться от узла A до B 
assert.deepStrictEqual(dfs(graph, 'Anton', 'Geil'), true);

console.log('Прошло!');
