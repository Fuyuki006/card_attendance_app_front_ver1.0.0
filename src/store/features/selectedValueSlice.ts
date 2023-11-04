import { createSlice } from "@reduxjs/toolkit"

export const selectedValueSlice = createSlice({
    name: "selectedValue",
    initialState:{
        value:0,
    },
    reducers: {
        updateValue: (state,action) => {
            state.value = action.payload;
        }
    }
});

export const { updateValue } = selectedValueSlice.actions;
export default selectedValueSlice.reducer;