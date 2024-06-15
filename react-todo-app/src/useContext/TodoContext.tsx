import { createContext, useContext, useState, ReactNode } from 'react';

export type Todo = {
    text: string;
    completed: boolean;
    id?: number
};

export type Filter = 'All' | 'Active' | 'Completed';

type TodoContextType = {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;   
    clearCompleted: () => void;
    removeTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => { },
    toggleTodo: () => { },
    clearCompleted: () => { },
    removeTodo: () => { }
});

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [IdCounter, setIdCounter] = useState<number>(0);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: IdCounter,
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setIdCounter(IdCounter + 1); // Increment id counter
    };

    const toggleTodo = (id: number) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const clearCompleted = () => {
        const remainingTodos = todos.filter(todo => !todo.completed);
        setTodos(remainingTodos);
    };

    const removeTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, clearCompleted, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => useContext(TodoContext);