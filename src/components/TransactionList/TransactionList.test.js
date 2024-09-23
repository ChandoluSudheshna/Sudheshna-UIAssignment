// src/components/TransactionList/TransactionList.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import TransactionList from "./TransactionList";

describe("TransactionList Component", () => {
  const transactions = [
    { customerId: 1, date: "2024-07-01", amount: 120 },
    { customerId: 2, date: "2024-07-10", amount: 200 },
  ];

  test("renders transactions correctly", () => {
    render(<TransactionList transactions={transactions} />);
    
    expect(screen.getByText("Transactions")).toBeInTheDocument();
    expect(screen.getByText("Customer 1 spent $120 on 2024-07-01")).toBeInTheDocument();
    expect(screen.getByText("Customer 2 spent $200 on 2024-07-10")).toBeInTheDocument();
  });

  test("renders no transactions message when transactions array is empty", () => {
    render(<TransactionList transactions={[]} />);
    
    expect(screen.getByText("Transactions")).toBeInTheDocument();
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
