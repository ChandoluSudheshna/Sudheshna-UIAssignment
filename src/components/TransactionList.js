import React from "react";

//To display list of customer transactions
const TransactionList = ({ transactions }) => {
    return (
        <div>
            <h2>Transactions</h2>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        Customer {transaction.customerId} spent ${transaction.amount} on {transaction.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;