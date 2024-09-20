//An API call to fetch transactions with Promise

export const fetchTransactions = async () => {
    try {
        const response = await fetch("http://localhost:5000/transactions");
        if (!response.ok) throw new Error("Network response was not ok");
        return await response.json();
    } catch (error){
        console.error("Error fetching transactions:", error);
        throw error;
    }
}