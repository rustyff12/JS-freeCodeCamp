// Bubble sort
const bubbleSort = (array) => {
    // let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            // console.log(array, array[j], array[j + 1]);
            // count++;
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    // console.log(count);
    return array;
};

console.log(bubbleSort([1, 5, 9, 3, 5, 2, 7, 9, 1]));
