const median = (values) => {
    if (values.length === 0) return 0;

    values.sort(function (a, b) {
        return a - b;
    });

    var half = Math.floor(values.length / 2);

    if (values.length % 2)
        return values[half];

    return (values[half - 1] + values[half]) / 2.0;
}

module.exports = (amounts) => {
    let arr = [].sort();
    amounts.map(amount => {
        arr.push(amount.value)
    })
    const values = {
        minimum:arr[0],
        maximum: arr[arr.length - 1],
        median: median(arr)
    }
    return values
}
