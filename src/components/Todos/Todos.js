import React, {useState} from 'react'
import { connect } from 'react-redux'
import {GoPlus} from 'react-icons/go'

import { addTodos, removeTodos, updateTodos, completeTodos } from '../../redux/reducer'
import styles from './Todos.module.scss'

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id))
    }
}

const Todos = (props) => {

    const [todo, setTodo] = useState('')
    const [value, setValue] = useState('')

    const addTodo = (props) => {
        props.addTodo({
            id: Math.floor(Math.random()*1000),
            item: todo,
            completed: false,
        })
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
        setValue(e.target.value)
    }

    const handleClear = (e) => {
        e.preventDefault()
        setValue('')
    }

    // console.log('props from store', props)

  return (
    <div className={styles.addTodos}>
        <input
            value={value} 
            type="text" 
            className={styles.todoInput}
            onChange={(e) => handleChange(e)}
            onFocus={(e) => handleClear(e)}
            />
        <button 
            className={styles.addBtn}
            onClick={(e) => {
                addTodo(props);
                handleClear(e);
            }}
        >
            <GoPlus/>
        </button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)