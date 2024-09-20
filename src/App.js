import React, {useEffect, useState} from "react";
import { fetchTransactions } from "./api/transactions";
import { aggregatePointsByCustomer } from "./utils/calculatePoints";
import TransactionList from "./components/TransactionList";
import Rewards from "./components/Rewards";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [customerPoints, setCustomerPoints] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
        const points = aggregatePointsByCustomer(data);
        setCustomerPoints(points);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getTransactions();
  }, []);

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {error}</p>;

  return (
    <div>
      <TransactionList transactions={transactions} />
      <Rewards  customerPoints={customerPoints} />
    </div>
  );
};

export default App;