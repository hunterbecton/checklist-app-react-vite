import create from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { persist } from 'zustand/middleware';

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      addTodo: () =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: uuidv4(),
              text: '',
              complete: false,
            },
          ],
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((prevTodo) => prevTodo.id !== id),
        })),
      editTodoText: (id, text) => {
        set((state) => {
          const newTodos = state.todos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, text };
            }
            return todo;
          });
          return {
            todos: newTodos,
          };
        });
      },
      editTodoComplete: (id, complete) => {
        set((state) => {
          const newTodos = state.todos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, complete };
            }
            return todo;
          });
          return {
            todos: newTodos,
          };
        });
      },
    }),
    {
      name: 'todo-list',
    }
  )
);

// export const useTodos = () => useTodoStore((state) => state.todos);
// export const todoActions = () => useTodoStore((state) => state.actions);
