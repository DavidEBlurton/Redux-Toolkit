import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExercise, deleteExercise } from '../slices/exercisesSlice';

const Exercises = () => {
  const exercises = useSelector(state => state.exercises);
  const dispatch = useDispatch();
  const [exercise, setExercise] = useState('');

  const handleAddExercise = () => {
    dispatch(addExercise({ id: Date.now(), name: exercise }));
    setExercise('');
  };

  const handleDeleteExercise = (id) => {
    dispatch(deleteExercise({ id }));
  };

  return (
    <div>
      <h1>Exercise Logs</h1>
      <input
        type="text"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />
      <button onClick={handleAddExercise}>Add Exercise</button>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.name}
            <button onClick={() => handleDeleteExercise(exercise.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercises;