function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) {
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
      }
  }

  return arr;
}

function selectionSort(arr) {
  for (let j = 0; j < arr.length; j++) {
      let minIndex = j;

      for (let i = j + 1; i < arr.length; i++) {
          if (arr[i] < arr[minIndex]) {
              minIndex = i;
          }
      }

      [arr[minIndex], arr[j]] = [arr[j], arr[minIndex]];
  }
  return arr;
}

function insertionSort(arr) {
  let temp;
  for (let i = 1; i < arr.length; i++) {
      temp = arr[i];

      for (var j = i - 1; arr[j] > temp && j > -1; j--) {
          arr[j + 1] = arr[j];
      }

      arr[j + 1] = temp;
  }

  return arr;
}