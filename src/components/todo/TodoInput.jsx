import { useRef, useEffect } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';

import { useTodoStore } from '../../store/useTodoStore';
import { classNames } from '../../utils/classNames';
import { CheckIcon } from '../icon/CheckIcon';
import { TrashIcon } from '../icon/TrashIcon';

export const TodoInput = ({ todo }) => {
  const inputRef = useRef(null);

  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const editTodoText = useTodoStore((state) => state.editTodoText);
  const editTodoComplete = useTodoStore((state) => state.editTodoComplete);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className='flex items-center justify-between rounded-md border-2 border-gray-one px-5 py-4'>
      <div className='flex w-full max-w-lg items-center justify-start'>
        <label className='sr-only'>Complete todo</label>
        <Checkbox.Root
          id={todo.id}
          checked={todo.complete}
          onCheckedChange={(checked) => editTodoComplete(todo.id, checked)}
          className='flex h-4 w-4 items-center justify-center rounded border border-gray-three bg-cream-four focus:border-green-five focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-five data-[state=checked]:border-green-five data-[state=checked]:bg-green-five'
        >
          <Checkbox.Indicator className='CheckboxIndicator'>
            <CheckIcon className='h-2 w-2 text-cream-four' />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className='sr-only'>Edit todo</label>
        <input
          ref={inputRef}
          type='text'
          value={todo.text}
          placeholder='Enter a todo'
          onChange={(e) => editTodoText(todo.id, e.target.value)}
          className='ml-5 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-b border-dashed border-b-gray-two bg-cream-four px-0 pb-1 text-base font-normal text-gray-three placeholder:text-gray-two focus:border-gray-three focus:outline-none focus:ring-0'
        />
        <span
          className={classNames(
            todo.complete ? 'bg-green-three' : 'bg-leaf-one',
            'ml-5 hidden rounded-full py-0.5 px-2 text-sm font-normal text-gray-five md:block'
          )}
        >
          {todo.complete ? 'Complete' : 'In Progress'}
        </span>
      </div>
      <button
        className='group ml-4 flex items-center justify-center rounded-md bg-cream-four p-2 hover:bg-steel-one focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-five'
        type='button'
        onClick={() => deleteTodo(todo.id)}
      >
        <TrashIcon className='h-5 w-5 text-steel-three group-hover:text-gray-five' />
      </button>
    </div>
  );
};
