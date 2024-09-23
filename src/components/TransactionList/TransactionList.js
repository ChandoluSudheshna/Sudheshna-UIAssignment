import React from "react";

//To display list of customer transactions
const TransactionList = React.memo(({ transactions }) => {
    return (
        <div>
            <h2>Transactions</h2>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        <strong>Customer {transaction.customerId}</strong> spent ${transaction.amount} on {transaction.date}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default TransactionList;