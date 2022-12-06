function orderPizza() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const pizza = '🍕';
            resolve(pizza);
        }, 2000)
    })
}

const pizzaPromise = orderPizza();

// console.log();
pizzaPromise
    .then((pizza) => {
        console.log('my pizza', pizza);
    });