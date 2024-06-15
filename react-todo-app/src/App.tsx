import { DarkModeProvider } from "./useContext/DarkModeContext"
import { TodoProvider } from "./useContext/TodoContext"
import Main from './components/Main'

const App = () => {
  return (
    <DarkModeProvider>
      <TodoProvider>
        <Main />
      </TodoProvider>
    </DarkModeProvider>
  )
}

export default App