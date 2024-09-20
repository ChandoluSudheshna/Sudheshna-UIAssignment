import React from "react";

//To display reward points for each customer
const Rewards = ({ customerPoints }) => {
    return (
        <div>
            <h2>Reward points</h2>
            {Object.keys(customerPoints).map((customerId) => (
                <div key={customerId}>
                    <h3>Customer {customerId}</h3>
                    <p>Total Points: {customerPoints[customerId].total}</p>
                    <h4>Monthly Breakdown</h4>
                    <ul>
                        {Object.keys(customerPoints[customerId].monthly).map((month) => (
                            <li key={month}>
                                {month}: {customerPoints[customerId].monthly[month]} points
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Rewards;