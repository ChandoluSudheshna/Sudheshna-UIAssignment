// src/components/Rewards/Rewards.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Rewards from "./Rewards";

describe("Rewards Component", () => {
  const customerPoints = {
    1: {
      total: 115,
      monthly: {
        July: 115,
      },
    },
    2: {
      total: 350,
      monthly: {
        July: 250,
        August: 100,
      },
    },
  };

  test("renders rewards points correctly", () => {
    render(<Rewards customerPoints={customerPoints} />);
    
    expect(screen.getByText("Rewards Points")).toBeInTheDocument();
    
    // Customer 1
    expect(screen.getByText("Customer 1")).toBeInTheDocument();
    expect(screen.getByText("Total Points: 115")).toBeInTheDocument();
    expect(screen.getByText("July: 115 points")).toBeInTheDocument();
    
    // Customer 2
    expect(screen.getByText("Customer 2")).toBeInTheDocument();
    expect(screen.getByText("Total Points: 350")).toBeInTheDocument();
    expect(screen.getByText("July: 250 points")).toBeInTheDocument();
    expect(screen.getByText("August: 100 points")).toBeInTheDocument();
  });

  test("renders no customers message when customerPoints is empty", () => {
    render(<Rewards customerPoints={{}} />);
    
    expect(screen.getByText("Rewards Points")).toBeInTheDocument();
    expect(screen.queryByText(/Customer/)).not.toBeInTheDocument();
  });
});
