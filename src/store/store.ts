import { configureStore } from "@reduxjs/toolkit";
import tagWallSliceReducer from "./features/TagWallSlice";
import { TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        tagWallValue : tagWallSliceReducer,
    },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
