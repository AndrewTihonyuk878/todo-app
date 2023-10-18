// import './scss/main.scss';
import './styles/global.scss'
import DisplayTodos from './components/DisplayTodos/DisplayTodos';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todos/>
      <DisplayTodos/>
    </div>
  );
}

export default App;
