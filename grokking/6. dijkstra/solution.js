import assert from 'node:assert/strict';
// Для определения взвешанного граф в узлы будет добавлять значения весов к узлам
const graph = {};
graph['Taganrog'] = {};
graph['Taganrog']['Rostov'] = 10;

graph['Rostov'] = {};
graph['Rostov']['Shakty'] = 15;
graph['Rostov']['Volgodonsk'] = 20;

graph['Shakty'] = {};
graph['Shakty']['Belgorod'] = 10;
graph['Shakty']['Rossosh'] = 20;

graph['Belgorod'] = {};
graph['Belgorod']['Voronezh'] = 40;

graph['Rossosh'] = {};
graph['Rossosh']['Voronezh'] = 5;

graph['Voronezh'] = {};
graph['Voronezh']['Moscow'] = 5;

graph['Volgodonsk'] = {};
graph['Volgodonsk']['Borisoglebsk'] = 5;
graph['Volgodonsk']['Tambov'] = 15;

graph['Borisoglebsk'] = {};
graph['Borisoglebsk']['Moscow'] = 30;

graph['Tambov'] = {};
graph['Tambov']['Moscow'] = 25;

graph['Moscow'] = {};

// Алгоритм Дейкстеры требует просчета весов
const weights = {};
weights['Rostov'] = 10;
weights['Moscow'] = Infinity;

// А также ссылки на родительские узлы
const parents = {};
parents['Rostov'] = 'Taganrog';
parents['Moscow'] = null;
// В processed помещаем уже "отработанные" узлы
let processed = [];

// Нахождение минимального веса
function findLowestWeightNode(weights) {
    let lowestWeight = Infinity;
    let lowestWeightNode = null;

    for (let node in weights) {
        const weight = weights[node];

        if (weight < lowestWeight && !processed.includes(node)) {
            // Сохраняем и вес и узел
            lowestWeight = weight;
            lowestWeightNode = node;
        }
    }

    return lowestWeightNode;
}

// Идея: найти узел с меньшим весом, искать до тех пор пока node != null
let node = findLowestWeightNode(weights);

while (node !== null) {
    // Вес текущего узла (будет минимальным)
    const weight = weights[node];
    // Пути движения
    const neighbors = graph[node];

    // Проходим по каждому и считаем веса, если он больше записываем
    for (let n in neighbors) {
        const new_weight = weight + neighbors[n];

        if (!weights[n] || weights[n] > new_weight) {
            weights[n] = new_weight;
            parents[n] = node;
        }
    }
    // Записываем в отработанные
    processed = processed.concat(node);
    // Ищем следующий не отработанный с минимальным весом
    node = findLowestWeightNode(weights);
}

let path = 'Moscow';
let parent = parents['Moscow'];

while (parent) {
    path += `->${parent}`;
    parent = parents[parent];
}

assert.deepStrictEqual(path, 'Moscow->Voronezh->Rossosh->Shakty->Rostov->Taganrog');