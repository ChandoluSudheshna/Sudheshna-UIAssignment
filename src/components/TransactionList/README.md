# TransactionList Component

## Description

Displays a list of all customer transactions.

## Props

### `transactions` (`Array<Object>`)

- **Description**: An array of transaction objects.
- **Required**: Yes
- **Shape**:
  - `customerId` (`number`): The ID of the customer.
  - `date` (`string`): The date of the transaction.
  - `amount` (`number`): The amount spent in the transaction.

## Usage

```javascript
import TransactionList from './TransactionList';

const transactions = [
  { customerId: 1, date: "2024-07-01", amount: 120 },
  // more transactions
];

<TransactionList transactions={transactions} />
