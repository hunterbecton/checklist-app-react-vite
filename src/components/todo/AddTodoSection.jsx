import { PlusIcon } from '../icon/PlusIcon';
import { useTodoStore } from '../../store/useTodoStore';

export const AddTodoSection = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  return (
    <section className='flex justify-between'>
      <h3 className='text-xl font-bold text-gray-three'>Checklist</h3>
      <button
        type='button'
        onClick={addTodo}
        className='group flex items-center rounded-md border-cream-four bg-green-one px-6 py-3 text-lg font-semibold text-gray-five outline outline-2 outline-offset-2 outline-green-one hover:text-green-five focus-visible:text-green-five focus-visible:outline-green-five'
      >
        Add Task
        <PlusIcon className='ml-3 h-4 w-4 text-gray-five group-hover:text-green-five group-focus-visible:text-green-five' />
      </button>
    </section>
  );
};
