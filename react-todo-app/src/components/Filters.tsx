import { Filter } from "../useContext/TodoContext"
import { useDarkMode } from "../useContext/DarkModeContext"

type FilterProps = {
    filter: Filter
    setFilter: (filter: Filter) => void
}

const Filters = ({ filter, setFilter }: FilterProps) => {
    const { isDarkMode } = useDarkMode();

    return (
        <section className="mt-4 md:hidden">
            <div className={`flex justify-center gap-[1.25rem] py-4 text-[.875rem] ${isDarkMode ? 'bg-white' : 'bg-dark-gray'}`}>
                <button
                    className={` ${filter === 'All' ? 'text-blue font-bold' : isDarkMode ? 'text-light-medium-gray' : 'text-dark-medium-gray'}`}
                    onClick={() => setFilter('All')}
                >
                    All
                </button>
                <button
                    className={`${filter === 'Active' ? 'text-blue font-bold' : isDarkMode ? 'text-light-medium-gray' : 'text-dark-medium-gray'}`}
                    onClick={() => setFilter('Active')}
                >
                    Active
                </button>
                <button
                    className={`${filter === 'Completed' ? 'text-blue font-bold' : isDarkMode ? 'text-light-medium-gray' : 'text-dark-medium-gray'}`}
                    onClick={() => setFilter('Completed')}
                >
                    Completed
                </button>
            </div>
        </section>
    )
}

export default Filters