import React, {useEffect, useMemo, useState} from "react";
import { fetchTransactions } from "./api/transactions";
import { aggregatePointsByCustomer } from "./utils/calculatePoints";
import TransactionList from "./components/TransactionList/TransactionList";
import Rewards from "./components/Rewards/Rewards";

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
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getTransactions();
  }, []);

  const aggregatedPoints = useMemo(() => {
    return aggregatePointsByCustomer(transactions);
  }, [transactions]);

  useEffect(() => {
    setCustomerPoints(aggregatedPoints);
  },[aggregatedPoints]);

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Retailer Rewards Program</h1>
      <TransactionList transactions={transactions} />
      <Rewards  customerPoints={customerPoints} />
    </div>
  );
};

export default App;