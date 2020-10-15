function reverse(num) {
    const isNegative = num[0] == '-';

    if (isNegative) {
        num = num.str.slice(1);
    }

    return (
        parseFloat(
            num
            .toString()
            .split('')
            .reverse()
            .join('')
        )
    );
}

module.exports = reverse;
