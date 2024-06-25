// Insertion Sort
const insertionSort = (array) => {
    let count = 0;
    for (let i = 1; i < array.length; i++) {
        const currValue = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > currValue) {
            count++;
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = currValue;
    }
    console.log(count);
    return array;
};

console.log(insertionSort([1, 5, 9, 3, 5, 2, 7, 9, 1]));
