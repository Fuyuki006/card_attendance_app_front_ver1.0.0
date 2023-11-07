import { createSlice } from "@reduxjs/toolkit"

export const tagWallSlice = createSlice({
    name: "tagWallValue",
    initialState:{
        row:0,
        column:0,
    },
    reducers: {
        updateRow: (state,action) => {
            state.row = action.payload;
        },
        updateColumn: (state,action) => {
            state.column = action.payload;
        }
    }
});

export const { updateRow, updateColumn } = tagWallSlice.actions;
export default tagWallSlice.reducer;