// https://habr.com/ru/companies/simbirsoft/articles/769312/
// Idea - shuffle adjacent elements until whole array would be sorted.
// You have to go whole array for each element once, but you can enhance algorithm to ignore end
// of array because all elements there are already sorted
// Сортировка пузырьком
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};
const arr1 = [-20, 1, -21, 100, 99, 993, 29, 10, -300];
// -20 1 -21 100 99 993 29 199 -300
// -20 -21 1 100 99 993 29 199 -300
// -20 -21 1 100 99 993 29 199 -300
// -20 -21 1 99 100 993 29 199 -300
// -20 -21 1 99 100 29 993 199 -300
// -20 -21 1 99 100 29 199 993 -300
// -20 -21 1 99 100 29 199 -300 993
// -21 -20 1 99 100 29 199 -300 993
// -21 -20 1 99 100 29 199 -300 993
// ...
console.log(bubbleSort(arr1));
// Idea - for each element iterate through whole array and find index of min element,
// shuffle element with element of min index at the end of first cycle
// Сортировка выбором
const selectedSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    [arr[min], arr[i]] = [arr[i], arr[min]];
  }

  return arr;
};

const arr2 = [-20, 1, -21, 100, 99, 993, 29, 10, -300];
// -300 1 -21 100 99 993 29 10 -20
// -300 -21 1 100 99 993 29 10 -20
// -300 -21 -20 100 99 993 29 10 1
// -300 -21 -20 1 99 993 29 10 100
// -300 -21 -20 1 10 993 29 99 100
// -300 -21 -20 1 10 29 993 99 100
// -300 -21 -20 1 10 29 99 993 100
// -300 -21 -20 1 10 29 99 100 993
console.log(selectedSort(arr2));

// Idea - take element and find count elements that current element is bigger, if the element bigger
// of 3 elements it means it should take 4-th place
// Циклическая сортировка
const cycleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let position = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < value) {
        position++;
      }
    }
    // On correct position
    if (position === i) {
      continue;
    }
    while (value === arr[position]) {
      // Duplicates
      position++;
    }

    // Replace items, set found element to position once
    [value, arr[position]] = [arr[position], value];

    while (position !== i) {
      position = i;
      for (let k = i + 1; k < arr.length; k++) {
        if (arr[k] < value) {
          position++;
        }
      }

      while (value === arr[position]) {
        // Duplicates
        position++;
      }

      [value, arr[position]] = [arr[position], value];
    }
  }

  return arr;
};

const arr3 = [-20, 1, -21, 100, 99, 993, 29, 10, -300];
// x 5 1 2 4 9 2
// x 5 1 3 4 9 2
// x 5 2 3 4 9 2
// 1 5 2 3 4 9 2
// 1 x 2 3 4 9 2
// 1 x 2 3 4 5 2
// 1 x 2 3 4 5 9
// 1 2 2 3 4 5 9
console.log(cycleSort(arr3));

// Idea - find median element split array on two by this element and sort them, after sort each next
const partition = (arr, start, end) => {
  const pivot = arr[end];
  let i = start;

  for (let j = start; j <= end - 1; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
};
// Быстрая сортировка
const quickSort = (arr, start, end) => {
  if (start < end) {
    const pi = partition(arr, start, end);

    quickSort(arr, start, pi - 1);
    quickSort(arr, pi + 1, end);
  }
};
const arr4 = [-20, 1, -21, 100, 99, 993, 29, 10, -300];
quickSort(arr4, 0, arr4.length - 1);
console.log(arr4);

const quickSort2 = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];

  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort2(left).concat(pivot, quickSort2(right));
};
const arr5 = [-20, 1, -21, 100, 99, 993, 29, 10, -300];
console.log(quickSort2(arr5));

// Searches ------********-------
// Линейный поиск
const linearSearch = (arr, findEl) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === findEl) {
      return i;
    }
  }
  return -1;
};

const arr6 = [-20, 1, -21, 100, 99, 993, 29, 10, -300];
console.log(linearSearch(arr6, 99));
// Бинарный поиск
const binarySearch = (arr, findEl) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === findEl) {
      return mid;
    }

    if (arr[mid] < findEl) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};
const arr7 = [-300, -21, -20, 1, 10, 29, 99, 100, 993];
console.log(binarySearch(arr7, 99));

// https://hackernoon.com/a-beginners-guide-to-bfs-and-dfs-in-javascript
// Траверсинг по графу в глубину или ширину
// Graph search algorithms Deep First Search / Breadth First Search
// Graph BFS/DFS
// https://app.diagrams.net/#G11t-hD2kTE0_OskNTtBCBScWZH19nxfZO
// adjacency list / Список смежных вершин
const graph = {
  A: ['B', 'D'],
  B: ['A', 'C', 'E'],
  C: ['B'],
  D: ['A', 'E'],
  E: ['B', 'D', 'F'],
  F: ['E'],
};

const bfs = (graph, start) => {
  const queue = [start];
  const visited = new Set();
  const result = [];

  while (queue.length) {
    const vertex = queue.shift();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of graph[vertex]) {
        queue.push(neighbor);
      }
    }
  }

  return result;
};

console.log(bfs(graph, 'A'));

const dfs = (graph, start) => {
  const stack = [start];
  const visited = new Set();
  const result = [];

  while (stack.length) {
    const vertex = stack.pop();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of graph[vertex]) {
        stack.push(neighbor);
      }
    }
  }

  return result;
};

console.log(dfs(graph, 'A'));

// Tree / Дерево

const createNode = (value, left, right) => ({ value, left, right });
// https://app.diagrams.net/#G11t-hD2kTE0_OskNTtBCBScWZH19nxfZO
const tree = createNode(
  1,
  createNode(2, createNode(4), createNode(5)),
  createNode(3, createNode(6), createNode(7))
);

const tbfs = (tree) => {
  const queue = [tree];
  const result = [];

  while (queue.length) {
    const node = queue.shift();
    result.push(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  return result;
}

console.log(tbfs(tree));


const tdfs = (tree) => {
  const stack = [tree];
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    result.push(node.value);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  return result;
}

console.log(tdfs(tree));

// 