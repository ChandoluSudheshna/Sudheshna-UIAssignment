import { calculatePoints, aggregatePointsByCustomer } from "./calculatePoints";

describe('calculatePoints', () => {
    test('calculate points correctly for amount over $100', () => {
        expect(calculatePoints(120)).toBe(90);
    });
});

describe('aggregatePointsByCustomer', () => {
    test('aggregates points correctly for multiple transactions', () => {
        const transactions =[
            { customerId: 1, date: '2024-07-01', amount: 120},
            { customerId: 1, date: '2024-07-05', amount: 75 },
            { customerId: 2, date: '2024-07-03', amount: 50 },
            { customerId: 2, date: '2024-07-10', amount: 200 },
        ];

        const expected = {
            1: {
                total: 115, //90+25
                monthly: {
                    July: 115,
                },
            },
            2: {
                total: 250, //0+250
                monthly: {
                    July: 250,
                },
            },
        };

        expect(aggregatePointsByCustomer(transactions)).toEqual(expected);
    });
}); 