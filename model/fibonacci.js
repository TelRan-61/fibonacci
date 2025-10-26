export function Fibonacci(quantity) {
    this.quantity = quantity;
    this[Symbol.iterator] =  () => {
        const quantity = this.quantity;
        return {
            prev: 1,
            prevPrev: 1,
            counter: 1,
            next: function () {
                if (this.counter <= quantity) {
                    if (this.counter++ <= 2) {
                        return {done: false, value: 1};
                    }
                    const current = this.prev;
                    this.prev = this.prev + this.prevPrev;
                    this.prevPrev = current;
                    return {done: false, value: this.prev};
                } else {
                    return {done: true}
                }
            }
        }
    }
}