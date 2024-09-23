// src/App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        { customerId: 1, date: "2024-07-01", amount: 120 },
        { customerId: 1, date: "2024-07-05", amount: 75 },
        { customerId: 2, date: "2024-07-10", amount: 200 },
      ]),
  })
);

describe("App Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders loading state initially", () => {
    render(<App />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders transactions and rewards after data fetch", async () => {
    render(<App />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // Wait for Transactions header to appear
    expect(await screen.findByText("Transactions")).toBeInTheDocument();

    // Transactions
    expect(await screen.findByText("Customer 1 spent $120 on 2024-07-01")).toBeInTheDocument();
    expect(await screen.findByText("Customer 1 spent $75 on 2024-07-05")).toBeInTheDocument();
    expect(await screen.findByText("Customer 2 spent $200 on 2024-07-10")).toBeInTheDocument();

    // Rewards
    expect(await screen.findByText("Rewards Points")).toBeInTheDocument();
    expect(await screen.findByText("Customer 1")).toBeInTheDocument();
    expect(await screen.findByText("Total Points: 115")).toBeInTheDocument(); // 90 + 25
    expect(await screen.findByText("July: 115 points")).toBeInTheDocument();

    expect(await screen.findByText("Customer 2")).toBeInTheDocument();
    expect(await screen.findByText("Total Points: 250")).toBeInTheDocument(); // 250
    expect(await screen.findByText("July: 250 points")).toBeInTheDocument();
  });

  test("handles fetch error gracefully", async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error("Fetch failed")));

    render(<App />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // Wait for error message
    expect(await screen.findByText("Error: Fetch failed")).toBeInTheDocument();
  });
});
