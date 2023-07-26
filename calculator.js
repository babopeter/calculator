function add(...numbers) {
    let result = numbers.reduce((sum, current) => sum + current, 0);
    return result;
}