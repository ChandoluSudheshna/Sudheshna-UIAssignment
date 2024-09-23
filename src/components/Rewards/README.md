# Rewards Component

## Description

Displays the reward points earned by each customer, including a monthly breakdown and total points.

## Props

### `customerPoints` (`Object`)

- **Description**: An object containing reward points aggregated by customer and month.
- **Required**: Yes
- **Shape**:
  - Keys: `customerId` (`number`)
  - Values:
    - `total` (`number`): Total reward points.
    - `monthly` (`Object`):
      - Keys: `month` (`string`)
      - Values: `points` (`number`)

## Usage

```javascript
import Rewards from './Rewards';

const customerPoints = {
  1: {
    total: 345,
    monthly: {
      July: 190,
      August: 80,
      September: 75,
    },
  },
  // more customers
};

<Rewards customerPoints={customerPoints} />
