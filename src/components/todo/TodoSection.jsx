import { TodoInput } from './TodoInput';

export const TodoSection = ({ todos }) => {
  return (
    <section className='mt-8 space-y-4'>
      {todos.map((todo) => (
        <TodoInput key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
