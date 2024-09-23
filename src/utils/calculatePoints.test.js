import { calculatePoints, aggregatePointsByCustomer } from "./calculatePoints";

describe('calculatePoints', () => {
    test('calculate points correctly for amount over $100', () => {
        expect(calculatePoints(120)).toBe(90);
        expect(calculatePoints(150)).toBe(150);
        expect(calculatePoints(250)).toBe(350);
    });
    test("calculates points correctly for $50 < amount <= $100", () => {
        expect(calculatePoints(75)).toBe(25); // (25 * 1) = 25
        expect(calculatePoints(100)).toBe(50); // (50 * 1) = 50
        expect(calculatePoints(60)).toBe(10); // (10 * 1) = 10
    });
    
    test("calculates points correctly for amount <= $50", () => {
        expect(calculatePoints(50)).toBe(0); // No points
        expect(calculatePoints(30)).toBe(0); // No points
    });
    
    test("handles zero and negative amounts", () => {
        expect(calculatePoints(0)).toBe(0);
        expect(calculatePoints(-50)).toBe(0);
    });
});

describe('aggregatePointsByCustomer', () => {
    const transactions = [
        { customerId: 1, date: "2024-07-01", amount: 120 },
        { customerId: 1, date: "2024-07-05", amount: 75 },
        { customerId: 1, date: "2024-08-03", amount: 50 },
        { customerId: 2, date: "2024-07-10", amount: 200 },
        { customerId: 2, date: "2024-08-05", amount: 110 },
        { customerId: 3, date: "2024-09-30", amount: 180 },
    ];

    test("aggregates points correctly by customer and month", () => {
        const result = aggregatePointsByCustomer(transactions);

    // Customer 1
    expect(result[1].total).toBe(115); 
    expect(result[1].monthly["July"]).toBe(115); 
    expect(result[1].monthly["August"]).toBe(0); 

    // Customer 2
    expect(result[2].total).toBe(250); 
    expect(result[2].monthly["July"]).toBe(250); 
    expect(result[2].monthly["August"]).toBe(100);

    // Customer 3
    expect(result[3].total).toBe(250);
    expect(result[3].monthly["September"]).toBe(250); 
  });

  test("returns empty object when transactions array is empty", () => {
    const result = aggregatePointsByCustomer([]);
    expect(result).toEqual({});
  });

  test("handles transactions with same customer and month correctly", () => {
    const duplicateTransactions = [
      { customerId: 1, date: "2024-07-01", amount: 120 },
      { customerId: 1, date: "2024-07-15", amount: 80 },
    ];
    const result = aggregatePointsByCustomer(duplicateTransactions);
    expect(result[1].total).toBe(130); 
    expect(result[1].monthly["July"]).toBe(130); 
    });
}); 