function first() {
    console.log('Hello Freddy!');
}

function second() {
    console.log('How are you?');
}

function third() {
    console.log("How's the weather?");
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

first();

delay(2000)
    .then(() => {
        second();
        return delay(2000);
    })
    .then(() => {
        third();
    });
