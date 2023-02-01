import { utliSlice } from "@reduxjs/toolkit";

export const utliSlice = createSlice({
  name: "utli",
  initialState: {
    loading: true
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { setLoading } = utliSlice.actions;
export default utliSlice.reducer;
