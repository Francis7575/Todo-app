import { useDarkMode } from '../useContext/DarkModeContext'
import Addtodo from './Addtodo'
import TodoList from './TodoList'
import { useEffect } from 'react'
import { MoonIcon, SunIcon } from '../SvgIcons'

const Main = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode()
    const bodyElement = document.body

    useEffect(() => {
        if (isDarkMode) {
            bodyElement.classList.add('light-color');
            bodyElement.classList.remove('dark-color');
        } else {
            bodyElement.classList.add('dark-color');
            bodyElement.classList.remove('light-color');
        }
    }, [isDarkMode]);

    const handleToggleDarkMode = () => {
        setTimeout(() => {
            toggleDarkMode();
        }, 200); // 200ms delay
    };

    return (
        <main className={`${isDarkMode ? 'light-bg' : 'dark-bg'} h-[200px] lg:h-[300px] bg-no-repeat w-full bg-cover`}>
            <div className='max-w-[540px] mx-auto'>
                <div className="flex justify-between items-center pt-[2.5rem] lg:pt-[4.375rem] px-[1.5rem] md:px-0 pb-[2.5rem]">
                    <h1 className="text-white text-[1.25rem] md:text-[2.5rem] font-bold tracking-[15px] uppercase">
                        Todo
                    </h1>
                    <button onClick={handleToggleDarkMode}>
                        {isDarkMode ? <MoonIcon className="md:w-[26px] md:h-[26px]" width={20} height={20} /> : SunIcon}
                    </button>
                </div>
                <Addtodo />
                <TodoList />
            </div>
        </main>
    )
}

export default Main