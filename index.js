function login(username, password, callback) {
    console.log("Logging in...");
    setTimeout(() => {
        if (username === "admin" && password === "1234") {
            callback(null, "Login successful!");
        } else {
            callback("Invalid credentials");
        }
    }, 1000);
}

function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        callback(null, [1, 2, 3, 4, 5]);
    }, 1000);
}

function processData(data, callback) {
    console.log("Processing data...");
    setTimeout(() => {
        const processed = data.map(x => x * 2);
        callback(null, processed);
    }, 1000);
}

function displayData(data, callback) {
    console.log("Displaying data:");
    setTimeout(() => {
        console.log(data);
        callback(null);
    }, 500);
}

// Executing using callbacks
login("admin", "1234", (err, loginMsg) => {
    if (err) return console.error(err);
    console.log(loginMsg);

    fetchData((err, data) => {
        if (err) return console.error(err);

        processData(data, (err, processedData) => {
            if (err) return console.error(err);

            displayData(processedData, (err) => {
                if (err) return console.error(err);
                console.log("All tasks completed using callbacks.");
            });
        });
    });
});

