console.log("Hello World")

function hello() {
    try {
        let value = new Promise((resolve, reject) => {
            rl.question('What - s your name ?', (name) => {
                if (name === "Cake") {
                    resolve(name);
                } else {
                    reject("Error");
                }
                rl.close();
            });
        });
        console.log('My name is ${ value }');
    } catch (e) {
        console.log(e);
    }
}
