import { createSlice } from '@reduxjs/toolkit';

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: [],
  reducers: {
    addExercise: (state, action) => {
      state.push(action.payload);
    },
    deleteExercise: (state, action) => {
      return state.filter(exercise => exercise.id !== action.payload.id);
    },
  },
});

export const { addExercise, deleteExercise } = exercisesSlice.actions;
export default exercisesSlice.reducer;
