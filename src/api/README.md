# Transactions API

## Description

This module simulates fetching transaction data from a local server.

## Functions

### `fetchTransactions()`

- **Description**: Fetches all transaction data from the local server.
- **Returns**: `Promise<Array<Object>>` - A promise that resolves to an array of transaction objects.
- **Throws**: An error if the network request fails.

## Usage

```javascript
import { fetchTransactions } from './transactions';

const getData = async () => {
  try {
    const transactions = await fetchTransactions();
    // Use transactions data
  } catch (error) {
    // Handle error
  }
};