import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TimerState {
  hangTime: string;
  offTime: string;
  restTime: string;
  repCount: string;
  setCount: string;
  delayStartTime: string;
}

const initialState: TimerState = {
  hangTime: "7",
  offTime: "3",
  restTime: "40",
  repCount: "6",
  setCount: "3",
  delayStartTime: "4",
};

export const timerSlice = createSlice({
  name: "timerInfo",
  initialState,
  reducers: {
    setWorkoutValues: (state, action: PayloadAction<TimerState>) => {
      return action.payload;
    },
  },
});

export const { setWorkoutValues } = timerSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default timerSlice.reducer;
