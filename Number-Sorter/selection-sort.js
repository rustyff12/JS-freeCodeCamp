// Selection Sort
const selectionSort = (array) => {
    // let count = 0;
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            // count++;
            // console.log(array, array[j], array[minIndex]);
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    // console.log(count);
    return array;
};

console.log(selectionSort([1, 5, 9, 3, 5, 2, 7, 9, 1]));
