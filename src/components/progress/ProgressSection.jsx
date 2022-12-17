import { useState, useEffect } from 'react';

import { ProgressBar } from './ProgressBar';
import { useTodoStore } from '../../store/useTodoStore';

export const ProgressSection = () => {
  const todos = useTodoStore((state) => state.todos);

  const [progress, setProgress] = useState({
    completePercentage: 0,
    inProgressPercentage: 0,
  });

  useEffect(() => {
    const totalTodos = todos.length;
    const newCompleteCount = todos.filter((todo) => todo.complete).length;
    const newInProgressCount = todos.filter((todo) => !todo.complete).length;

    if (totalTodos > 0) {
      setProgress({
        completePercentage: Math.round((newCompleteCount / totalTodos) * 100),
        inProgressPercentage: Math.round(
          (newInProgressCount / totalTodos) * 100
        ),
      });
    }

    if (totalTodos === 0) {
      setProgress({
        completePercentage: 0,
        inProgressPercentage: 0,
      });
    }
  }, [todos]);

  return (
    <section className='mt-10'>
      <h3 className='text-xl font-bold text-gray-three'>Progress</h3>
      <div className='mt-8 space-y-8'>
        <ProgressBar
          title='In Progress'
          percentage={progress.inProgressPercentage}
        />
        <ProgressBar
          title='Completed'
          percentage={progress.completePercentage}
        />
      </div>
    </section>
  );
};
