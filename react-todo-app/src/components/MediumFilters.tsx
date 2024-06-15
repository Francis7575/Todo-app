import { Filter } from "../useContext/TodoContext"
import { useDarkMode } from "../useContext/DarkModeContext"

type FilterProps = {
    filter: Filter
    setFilter: (filter: Filter) => void
}

const MediumFilters = ({ filter, setFilter }: FilterProps) => {
    const { isDarkMode } = useDarkMode();

    return (
        <section className="hidden md:block">
            <div className={`flex justify-center gap-[1.25rem] text-[.875rem] ${isDarkMode ? 'bg-white' : 'bg-dark-gray'}`}>
                <button
                    className={` ${filter === 'All' ? 'text-blue font-bold' : isDarkMode ? 'text-light-medium-gray hover:text-blue-gray' : 'text-dark-medium-gray hover:text-lavender-gray'}`}
                    onClick={() => setFilter('All')}
                >
                    All
                </button>
                <button
                    className={`${filter === 'Active' ? 'text-blue font-bold' : isDarkMode ? 'text-light-medium-gray hover:text-blue-gray' : 'text-dark-medium-gray hover:text-lavender-gray'}`}
                    onClick={() => setFilter('Active')}
                >
                    Active
                </button>
                <button
                    className={`${filter === 'Completed' ? 'text-blue font-bold' : isDarkMode ? 'text-light-medium-gray hover:text-blue-gray' : 'text-dark-medium-gray hover:text-lavender-gray'}`}
                    onClick={() => setFilter('Completed')}
                >
                    Completed
                </button>
            </div>
        </section>
    )
}

export default MediumFilters