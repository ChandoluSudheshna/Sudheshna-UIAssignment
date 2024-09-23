import React from "react";

//To display reward points for each customer
const Rewards = React.memo(({ customerPoints }) => {
    return (
        <div>
            <h2>Reward points</h2>
            {Object.keys(customerPoints).map((customerId) => (
                <div key={customerId} style={{marginBottom: "20px"}} >
                    <h3>Customer {customerId}</h3>
                    <p><strong>Total Points:</strong> {customerPoints[customerId].total}</p>
                    <h4>Monthly Breakdown</h4>
                    <ul>
                        {Object.keys(customerPoints[customerId].monthly).map((month) => (
                            <li key={month}>
                                <strong>{month}:</strong> {customerPoints[customerId].monthly[month]} points
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
});

export default Rewards;