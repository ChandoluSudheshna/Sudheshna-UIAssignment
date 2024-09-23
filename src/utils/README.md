# Calculate Points Utility

## Description

This module contains business logic for calculating reward points based on transaction amounts and aggregating them by customer and month.

## Functions

### `calculatePoints(amount)`

- **Description**: Calculates reward points for a single transaction.
- **Parameters**:
  - `amount` (`number`): The transaction amount.
- **Returns**: `number` - The reward points earned.

### `aggregatePointsByCustomer(transactions)`

- **Description**: Aggregates reward points by customer and month.
- **Parameters**:
  - `transactions` (`Array<Object>`): Array of transaction objects.
- **Returns**: `Object` - An object containing total and monthly points per customer.

## Usage

```javascript
import { calculatePoints, aggregatePointsByCustomer } from './calculatePoints';

const amount = 120;
const points = calculatePoints(amount); // 90 points

const transactions = [
  { customerId: 1, date: "2024-07-01", amount: 120 },
  // more transactions
];
const aggregated = aggregatePointsByCustomer(transactions);
