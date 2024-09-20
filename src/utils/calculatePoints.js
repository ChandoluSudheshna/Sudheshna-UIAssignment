//To calculate reward points for a transaction
export const calculatePoints = (amount) => {
    let points = 0;

    // 2 points for every dollar spent over $100
    if(amount > 100) {
        points += (amount - 100) * 2;
        amount = 100;
        console.log(points)
    }

    // 1 point for every dollar spent between $50 and $100
    if(amount > 50) {
        points += (amount - 50);
        console.log(points);
    }

    return points;
};

//Aggregate reward points by customer and month
export const aggregatePointsByCustomer = (transactions) => {
    const pointsByCustomer = {};

    transactions.forEach((transactions) => {
        const { customerId, amount, date } = transactions;
        const points = calculatePoints(amount);
        const month = new Date(date).toLocaleString("default", { month: "long" });

        if(!pointsByCustomer[customerId]) {
            pointsByCustomer[customerId] = { total: 0, monthly: {} };
        }

        pointsByCustomer[customerId].total += points;
        pointsByCustomer[customerId].monthly[month] = 
        (pointsByCustomer[customerId].monthly[month] || 0) +points;
    });

    return pointsByCustomer;
};