const http = require("http");

//Transaction Data
const transactions = [
  // Customer 1 - July
  { customerId: 1, date: "2024-07-01", amount: 120 },
  { customerId: 1, date: "2024-07-05", amount: 75 },
  { customerId: 1, date: "2024-07-15", amount: 200 },
  // Customer 1 - August
  { customerId: 1, date: "2024-08-03", amount: 50 },
  { customerId: 1, date: "2024-08-22", amount: 130 },
  // Customer 1 - September
  { customerId: 1, date: "2024-09-10", amount: 90 },
  { customerId: 1, date: "2024-09-18", amount: 160 },
  
  // Customer 2 - July
  { customerId: 2, date: "2024-07-03", amount: 50 },
  { customerId: 2, date: "2024-07-10", amount: 200 },
  { customerId: 2, date: "2024-07-20", amount: 80 },
  // Customer 2 - August
  { customerId: 2, date: "2024-08-05", amount: 110 },
  { customerId: 2, date: "2024-08-15", amount: 60 },
  // Customer 2 - September
  { customerId: 2, date: "2024-09-12", amount: 95 },
  { customerId: 2, date: "2024-09-25", amount: 150 },
  
  // Customer 3 - July
  { customerId: 3, date: "2024-07-07", amount: 45 },
  { customerId: 3, date: "2024-07-19", amount: 130 },
  // Customer 3 - August
  { customerId: 3, date: "2024-08-09", amount: 85 },
  { customerId: 3, date: "2024-08-21", amount: 210 },
  // Customer 3 - September
  { customerId: 3, date: "2024-09-05", amount: 70 },
  { customerId: 3, date: "2024-09-30", amount: 180 },
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