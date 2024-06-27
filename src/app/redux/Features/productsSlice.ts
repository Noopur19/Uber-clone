import { Product } from "@/lib/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ProductsState {
  data: { products: Product[] };
  productDetails: Product | null;
  loading: boolean;
  detailsLoading: boolean;
  error: string | null | undefined; // Update to allow undefined
}

const initialState: ProductsState = {
  data: { products: [] },
  productDetails: null,
  loading: true,
  detailsLoading: true,
  error: null, // Initialize error to null
};

interface FetchDataParams {
  category: string;
  rating: number;
  sortBy: string;
}

export const fetchData: any = createAsyncThunk(
  "products/fetchData",
  async ({ category, rating, sortBy }: FetchDataParams) => {
    const response = await fetch(
      `http://localhost:3000/api/products?category=${category}&rating=${rating}&sortBy=${sortBy}`
    );
    const data = await response.json();
    return data; // Return the data
  }
);

export const fetchProductDetails: any = createAsyncThunk(
  "productDetails/fetchData",
  async (productId: string) => {
    const response = await fetch(
      `http://localhost:3000/api/products/${productId}`
    );
    const data = await response.json();
    return data; // Return the data
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Update state.data with fetched data
        state.error = null; // Reset error on successful fetch
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.data = { products: [] };
        state.error = action.error.message || "Unknown error"; // Handle undefined error message
      })
      .addCase(fetchProductDetails.pending, (state) => {
        state.detailsLoading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.productDetails = action.payload; // Update state.data with fetched data
        state.error = null; // Reset error on successful fetch
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.detailsLoading = false;
        state.productDetails = null;
        state.error = action.error.message || "Unknown error"; // Handle undefined error message
      });
  },
});

export default productsSlice.reducer;
