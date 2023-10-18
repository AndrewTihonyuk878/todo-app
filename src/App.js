// import './scss/main.scss';
import './styles/global.scss'
import DisplayTodos from './components/DisplayTodos/DisplayTodos';
import Todos from './components/Todos/Todos';

import { motion } from "framer-motion"

function App() {
  return (
    <div className="App">
      <motion.h1 
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: .5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>

      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1.2 }}
      >
        <Todos/>
        <DisplayTodos/>
      </motion.div>
    </div>
  );
}

export default App;
