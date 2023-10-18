import React, {useRef} from 'react'
import {AiFillEdit} from 'react-icons/ai'
import {IoMdDoneAll} from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'

import styles from './TodoItem.module.scss'

const TodoItem = (props) => {
    const {item, updateTodo, removeTodo, completeTodo} = props;

    const inputRef = useRef(true)

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus()
    }

    const update = (id, value, e) => {
        if (e.which === 13) {
            updateTodo({id, item: value})
            inputRef.current.disabled = true;
        }
    }

  return (
    <li key = {item.id} className={styles.card}>
        <textarea 
            ref={inputRef} 
            disabled={inputRef} 
            defaultValue={item.item}
            onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
            className={item.completed ? `${styles.completed}` : ""}    
        />
        <div className={styles.btns}>
            <button
                className={styles.actionButton} 
                onClick={() => changeFocus()}
            >
                <AiFillEdit/>
            </button>
            <button
                className={styles.actionButton} 
                style={{color: "green"}}
                onClick={() => completeTodo(item.id)}
            >
                <IoMdDoneAll/>
            </button>

            <button
                className={styles.actionButton}
                style={{color: "red"}} 
                onClick={() => removeTodo(item.id)}
            >
                <AiOutlineClose/>
            </button>
        </div>
    </li>
  )
}

export default TodoItem