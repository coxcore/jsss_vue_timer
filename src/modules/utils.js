export const recordFormat = (time = 0) => {
    const secArr = (time % 60)
        .toFixed(2)
        .split('.');

    const minStr = parseInt(time / 60, 10)
        .toString()
        .padStart(2, '0');

    const secStr = secArr[0].padStart(2, '0');
    const miliStr = secArr[1];

    return `${minStr}:${secStr}.${miliStr}`;
};
