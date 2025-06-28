import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import * as Enums from "../../utilities/enums/ContactEnums";

type filterStates = { term?: string; valueType?: Enums.TypeContact };

const initialState: filterStates = { term: "" };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },

    changeFilter: (state, action: PayloadAction<filterStates>) => {
      state.valueType = action.payload.valueType;
    },
  },
});

export const { changeTerm, changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
