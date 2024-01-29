// Пузырьковая / Bubble sort

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

const arr1 = [-22, 99, 900, 300, 21, 1, 0, -12];

// console.log(bubbleSort(arr1));

// Сортировка выбором / selected sort

const selectedSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }

  return arr;
};

const arr2 = [-22, 99, 900, 300, 21, 1, 0, -12];

// console.log(selectedSort(arr2));

// Циклическая сортировка / Cycle sort

const cycleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let position = i;
    let value = arr[position];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < value) {
        position++;
      }
    }

    if (position === i) {
      continue;
    }

    if (arr[position] === value) {
      position++;
    }

    [arr[position], value] = [value, arr[position]];

    while (position !== i) {
      position = i;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < value) {
          position++;
        }
      }

      if (arr[position] === value) {
        position++;
      }

      [arr[position], value] = [value, arr[position]];
    }
  }

  return arr;
};

const arr3 = [-22, 99, 900, 300, 21, 1, 0, -12];

// console.log(cycleSort(arr3));

// Быстрая сортировка / Quick Sort

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];

  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] > pivot ? right.push(arr[i]) : left.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

const arr4 = [-22, 99, 900, 300, 21, 1, 0, -12];

// console.log(quickSort(arr4));

// Бинарный поиск binary search

const binarySearch = (arr, findEl) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const midIndex = Math.floor((start + end) / 2);

    if (arr[midIndex] === findEl) {
      return midIndex;
    }

    if (arr[midIndex] < findEl) {
      start = midIndex + 1;
    } else {
      end = midIndex - 1;
    }
  } 

  return -1;
}
const arr5 = [-22, -12, 0, 1, 21, 99, 900];

console.log(binarySearch(arr5, 0));
