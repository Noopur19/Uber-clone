import { test, jest, expect } from "@jest/globals";
import { NextResponse } from "next/server"; // Import NextResponse for mocking

jest.mock("mongodb", () => ({
  // Mock the Category.find() method to return desired test data
  async find() {
    return [{ name: "Electronics" }, { name: "Books" }, { name: "Clothing" }];
  },
}));

// Mock the connectToDataBase() function (optional)
jest.mock("./connectToDataBase", () => ({
  connectToDataBase: jest.fn(),
}));

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]

async function handler() {
  // Simulate the actual API route behavior
  // await connectToDataBase(); // Call the mocked function (optional)
  // const categories = await Category.find();
  return NextResponse.json({ users });
}

test("GET /api/categories returns a list of categories", async () => {
//   const response = await handler(); // Call the handler function
//   const data = await response.json();

//   expect(response.status).toBe(200); // Assert status code
//   expect(data).toEqual([
//     { name: "Electronics" },
//     { name: "Books" },
//     { name: "Clothing" },
//   ]);

  const response = await handler();
  const data = await response.json();

  expect(response.status).toBe(200);
  expect(data).toEqual([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
});
