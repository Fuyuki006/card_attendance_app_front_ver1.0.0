import { configureStore } from "@reduxjs/toolkit";
import selectedValueReducer from "./features/selectedValueSlice";
import { TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        selected : selectedValueReducer,
    },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
