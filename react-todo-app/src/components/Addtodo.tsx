import { FormEvent, ChangeEvent, useState } from 'react'
import { useDarkMode } from '../useContext/DarkModeContext'
import { useTodoContext } from '../useContext/TodoContext'
import { AddTodoDark, AddTodoLight } from '../SvgIcons'

const Addtodo = () => {
    const { isDarkMode } = useDarkMode();
    const { addTodo } = useTodoContext();
    const [todoText, setTodoText] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addTodo(todoText);
        setTodoText('');
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}
            className="w-full px-[1.5rem] md:px-0 mb-4">
            <div className={`${isDarkMode ? 'bg-white' : 'bg-dark-gray'} relative pl-[3.25rem] rounded-[.315rem] py-[.875rem]`}>
                <input
                    className={`w-full outline-none text-[.75rem] md:text-[1.125rem] ${isDarkMode ? 'bg-white text-dark-blue-gray' : 'bg-dark-gray text-light-blue-gray'}`}
                    type="text"
                    value={todoText}
                    name="todos"
                    onChange={handleInputChange}
                    placeholder="Create a new todo…"
                    required />
                <button className='absolute top-1/2 left-5 transform -translate-y-1/2'>
                    {isDarkMode ? AddTodoLight : AddTodoDark}
                </button>
            </div>
        </form>
    )
}

export default Addtodo