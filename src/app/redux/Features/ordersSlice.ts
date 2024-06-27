import Toast from "@/components/Toast/Toast";
import { Category, Orders } from "@/lib/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface OrdersState {
  data: { orders: Orders[] | null };
  loading: boolean;
  error: string | null | undefined; // Update to allow undefined
}

const initialState: OrdersState = {
  data: { orders: null },
  loading: true,
  error: null, // Initialize error to null
};

export const fetchOrdersData: any = createAsyncThunk(
  "orders/fetchData",
  async (userId: string) => {
    const response = await fetch(`http://localhost:3000/api/orders/${userId}`);
    const data = await response.json();
    return data; // Return the data
  }
);

export const postOrderData: any = createAsyncThunk(
  "orders/postData",
  async (body: string) => {
    try {
      const { action } = body && JSON.parse(body);
      const response = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      const data = await response.json();
      Toast.success("Ordered successfully");
      return data; // Return the data
    } catch (error) {
      Toast.error("Failed to order");
      throw error;
    }
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrdersData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Update state.data with fetched data
        state.error = null; // Reset error on successful fetch
      })
      .addCase(fetchOrdersData.rejected, (state, action) => {
        state.loading = false;
        state.data = { orders: null };
        state.error = action.error.message || "Unknown error"; // Handle undefined error message
      });
  },
});

export default ordersSlice.reducer;
