function calculateAverage(arr) {
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}
