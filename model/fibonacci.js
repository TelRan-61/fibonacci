export function Fibonacci(quantity, iterator) {
    this.quantity = quantity;
    this[Symbol.iterator] = iterator ??  (() => {
        const quantity = this.quantity;
        let prev = 1;
        let prevPrev = 1;
        let counter = 1;
        return {
            next: function () {
                if (counter <= quantity) {
                    if (counter++ <= 2) {
                        return {done: false, value: 1};
                    }
                    const current = prev;
                    prev = prev + prevPrev;
                    prevPrev = current;
                    return {done: false, value: prev};
                } else {
                    return {done: true}
                }
            }
        }
    })
}