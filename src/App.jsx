import { TodoSection } from './components/todo/TodoSection';
import { useTodoStore } from './store/useTodoStore';
import { ProgressSection } from './components/progress/ProgressSection';
import { AddTodoSection } from './components/todo/AddTodoSection';

function App() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className='min-h-screen bg-olive-one p-0 selection:bg-green-two md:py-24 md:px-8'>
      <main className='mx-auto min-h-screen w-full max-w-none rounded-none bg-cream-four px-5 py-10 outline-none md:min-h-max md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8 md:outline-cream-four'>
        <h1 className='text-2xl font-bold text-gray-three'>Dashboard</h1>
        <div className='mt-10'>
          <AddTodoSection />
          <TodoSection todos={todos} />
          <ProgressSection />
        </div>
      </main>
    </div>
  );
}

export default App;
