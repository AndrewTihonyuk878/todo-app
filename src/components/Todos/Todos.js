import React, {useState} from 'react'
import { connect } from 'react-redux'
import {GoPlus} from 'react-icons/go'
import { motion } from "framer-motion"

import { addTodos } from '../../redux/reducer'
import styles from './Todos.module.scss'

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    }
}

const Todos = (props) => {

    const [todo, setTodo] = useState('')

    const add = () => {
        if(todo === ''){
            alert("Input is Empty")
        } else {
            props.addTodo({
                id: Math.floor(Math.random()*1000),
                item: todo,
                completed: false,
            })
            setTodo('')
        }
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleClear = (e) => {
        e.preventDefault()
        setTodo('')
    }

    // console.log('props from store', props)

  return (
    <div className={styles.addTodos}>
        <input
            value={todo} 
            type="text" 
            className={styles.todoInput}
            onChange={(e) => handleChange(e)}
            onFocus={(e) => handleClear(e)}
            />
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className={styles.addBtn}
            onClick={() => add()}
        >
            <GoPlus/>
        </motion.button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)