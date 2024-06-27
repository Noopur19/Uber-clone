import { Category } from "@/lib/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface CategoriesState {
  data: { categories: Category[] };
  loading: boolean;
  category: string;
  rating: number;
  sortBy: string;
  error: string | null | undefined; // Update to allow undefined
}

const initialState: CategoriesState = {
  data: { categories: [] },
  category: "",
  rating: 0,
  sortBy: "",
  loading: true,
  error: null, // Initialize error to null
};

export const fetchData: any = createAsyncThunk(
  "categories/fetchData",
  async () => {
    const response = await fetch("http://localhost:3000/api/categories");
    const data = await response.json();
    return data; // Return the data
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCategories: (state, action) => {
      state.data = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
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
        state.data = { categories: [] };
        state.error = action.error.message || "Unknown error"; // Handle undefined error message
      });
  },
});

export const { setCategory, setRating, setSortBy, setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
