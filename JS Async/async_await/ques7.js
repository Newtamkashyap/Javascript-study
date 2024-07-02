

function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("async operation 1");
            resolve();
        }, 1000);
    });

}


function fun2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("async operation 2");
            resolve();
        }, 2000);
    });

}

async function operation() {
    try {
        await fun1();
        await fun2();
        console.log("all operation completed")
    }
    catch (error) {
        console.log("error", error.message)
    }
}
operation();

