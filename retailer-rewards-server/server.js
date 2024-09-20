const http = require("http");

//Transaction Data
const transactions = [
    //July transactions
    { customerId:1, date: "2024-07-01", amount: 120},
    // { customerId:2, date: "2024-07-05", amount: 75},
    // { customerId:3, date: "2024-07-03", amount: 50},
    // { customerId:4, date: "2024-07-10", amount: 200},

    //  // August Transactions
    // { customerId: 1, date: "2024-08-03", amount: 200 },
    // { customerId: 2, date: "2024-08-10", amount: 150 },
    // { customerId: 3, date: "2024-08-05", amount: 90 },
    // { customerId: 4, date: "2024-08-12", amount: 60 },

    // // September Transactions
    // { customerId: 1, date: "2024-09-01", amount: 120 },
    // { customerId: 2, date: "2024-09-07", amount: 75 },
    // { customerId: 3, date: "2024-09-15", amount: 95 },
    // { customerId: 4, date: "2024-09-25", amount: 50 }
];

//Server creation
const server = http.createServer((req, res) => {
    //Only respond to the /transactions route
    if(req.url === "/transactions" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json", "access-control-allow-origin": "*"});
        res.end(JSON.stringify(transactions));
    } else {
        //To handle invalid routes
        res.writeHead(404, { "Content-Type": "text/plain", "access-control-allow-origin": "*"});
        res.end("404 Not Found");
    }
});

//Start the server and listen on port 5000
const port = 5000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});