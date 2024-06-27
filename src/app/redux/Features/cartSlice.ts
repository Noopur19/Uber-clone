import Toast from "@/components/Toast/Toast";
import { Cart, CartProduct } from "@/lib/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface CartState {
  cartData: {
    cart: Cart | null;
  };
  cartLoading: boolean;
  cartError: string | null | undefined; // Update to allow undefined
  addToCartLoading: boolean;
  addToCartError: string | null | undefined;
}

const initialState: CartState = {
  cartData: {
    cart: null,
  },
  cartLoading: true,
  cartError: null,
  addToCartLoading: false,
  addToCartError: null, // Initialize error to null
};

export const fetchCartData: any = createAsyncThunk(
  "cart/fetchData",
  async (userId: string) => {
    const response = await fetch(`http://localhost:3000/api/cart/${userId}`);
    const data = await response.json();
    return data; // Return the data
  }
);

export const postCartData: any = createAsyncThunk(
  "cart/postData",
  async (body: string) => {
    try {
      const { action } = body && JSON.parse(body);
      const response = await fetch("http://localhost:3000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      const data = await response.json();
      if (action === "increase") {
        Toast.success("Item quantity increased");
      } else if (action === "decrease") {
        Toast.success("Item quantity decreased");
      } else if (action === "remove") {
        Toast.success("Item removed from cart");
      } else {
        Toast.success("Item added to cart successfully");
      }
      return data; // Return the data
    } catch (error) {
      Toast.error("Failed to fetch data");
      throw error;
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.cartLoading = true;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.cartLoading = false;
        state.cartData = action.payload; // Update state.data with fetched data
        state.cartError = null; // Reset error on successful fetch
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.cartLoading = false;
        state.cartData = { cart: null };
        state.cartError = action.error.message || "Unknown error"; // Handle undefined error message
      })
      .addCase(postCartData.pending, (state) => {
        state.addToCartLoading = true;
      })
      .addCase(postCartData.fulfilled, (state, action) => {
        state.addToCartLoading = false;
        state.addToCartError = null; // Reset error on successful fetch
      })
      .addCase(postCartData.rejected, (state, action) => {
        state.addToCartLoading = false;
        state.addToCartError = action.error.message || "Unknown error"; // Handle undefined error message
      });
  },
});

export default cartSlice.reducer;
