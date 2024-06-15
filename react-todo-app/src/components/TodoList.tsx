import { useTodoContext, Todo, Filter } from "../useContext/TodoContext"
import { useDarkMode } from "../useContext/DarkModeContext"
import { AddTodoDark, AddTodoLight, LightDeleteIcon, DarkDeleteIcon, IconCompleted, HoverCompletedIcon } from "../SvgIcons"
import { useState, MouseEvent } from "react"
import Filters from "./Filters"
import MediumFilters from "./MediumFilters"

const TodoList = () => {
  const { todos, toggleTodo, clearCompleted, removeTodo } = useTodoContext(); // Access todos array from TodoContext
  const { isDarkMode } = useDarkMode();
  const [filter, setFilter] = useState<Filter>('All');
  const [hoveredTodo, setHoveredTodo] = useState<number | null>(null); // State to track hovered todo index

  const filterFunctions: Record<Filter, (todos: Todo[]) => Todo[]> = {
    All: todos => todos,
    Active: todos => todos.filter(todo => !todo.completed),
    Completed: todos => todos.filter(todo => todo.completed),
  };

  const filteredTodos = filterFunctions[filter](todos);

  const handleMouseEnter = (index: number) => {
    setHoveredTodo(index);
  };

  const handleMouseLeave = () => {
    setHoveredTodo(null);
  };

  const handleDeleteClick = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation(); // Prevent event from propagating to li onClick
    removeTodo(id);
  };

  // Calculate the number of uncompleted tasks
  const itemsLeft = todos.filter(todo => !todo.completed).length;

  return (
    <section className="px-[1.5rem] md:px-0">
      <ul className={`rounded-[.315rem] ${isDarkMode ? 'bg-white shadow-light-card' : 'bg-dark-gray shadow-dark-card'}`}>
        {filteredTodos.map((todo) => (
          <li key={todo.id}
            onClick={() => toggleTodo(todo.id!)}
            className={`pl-[1.25rem] pr-[1.25rem] border-b py-4 flex justify-between items-center 
            ${isDarkMode ? 'border-light-grayish-blue' : 'border-dark-slate-blue'}`}>
            <div className="flex items-center gap-[.75rem]">
              <button className="relative"
                onMouseEnter={() => handleMouseEnter(todo.id!)} onMouseLeave={handleMouseLeave}>
                {todo.completed ? (
                  <>
                    {hoveredTodo === todo.id && <HoverCompletedIcon className="absolute top-0 left-0 w-full h-full" />}
                    {IconCompleted}
                  </>
                ) : (
                  <>
                    {hoveredTodo === todo.id && <HoverCompletedIcon className="absolute top-0 left-0 w-full h-full" />}
                    {isDarkMode ? AddTodoLight : AddTodoDark}
                  </>
                )}
              </button>
              <p className={`${isDarkMode ? 'text-dark-blue-gray' : 'text-light-blue-gray'} text-[.75rem] md:text-[1.125rem]`}>
                {todo.text}
              </p>
            </div>
            <button className="md:hidden"
              onClick={(e) => handleDeleteClick(e, todo.id || 0)}>
              {isDarkMode ? <LightDeleteIcon width={12} height={12} /> : <DarkDeleteIcon width={12} height={12} />}
            </button>
            <button className="hidden md:block delete-button"
              onClick={(e) => handleDeleteClick(e, todo.id || 0)}>
              {isDarkMode ? <LightDeleteIcon width={18} height={18} /> : <DarkDeleteIcon width={18} height={18} />}
            </button>
          </li>
        ))}
        <div className="flex justify-between items-center px-[1.25rem] text-[.75rem] md:text-[.875rem] py-[1rem]">
          <p className={`${isDarkMode ? 'text-light-medium-gray' : 'text-dark-medium-gray'}`}>
            {itemsLeft} items left
          </p>
          <MediumFilters filter={filter} setFilter={setFilter} />
          <button onClick={clearCompleted}
            className={`${isDarkMode ? 'text-light-medium-gray hover:text-blue-gray' : 'text-dark-medium-gray hover:text-lavender-gray'}`}>
            Clear completed
          </button>
        </div>
      </ul>
      <Filters filter={filter} setFilter={setFilter} />
    </section>
  )
}

export default TodoList