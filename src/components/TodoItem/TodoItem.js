import React, {useRef} from 'react'
import {AiFillEdit} from 'react-icons/ai'
import {IoMdDoneAll} from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'
import { motion } from "framer-motion"
import { Tilt } from 'react-tilt'

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
    <Tilt>
        <motion.li 
            initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
            animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
            exit={{
                x: "-60vw",
                scale: [1, 0],
                transition: { duration: .5 },
                backgroundColor: "rgba(255,0,0,1)"
            }}
            key = {item.id} 
            className={styles.card}
        >
            <textarea 
                ref={inputRef} 
                disabled={inputRef} 
                defaultValue={item.item}
                onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
                className={item.completed ? `${styles.completed}` : ""}    
            />
            <div className={styles.btns}>
                <motion.button
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: .9 }}
                    className={styles.actionButton} 
                    onClick={() => changeFocus()}
                >
                    <AiFillEdit/>
                </motion.button>

                {item.completed === false &&             
                    <motion.button
                        whileHover={{ scale: 1.4 }}
                        whileTap={{ scale: .9 }}
                        className={styles.actionButton} 
                        style={{color: "green"}}
                        onClick={() => completeTodo(item.id)}
                    >
                        <IoMdDoneAll/>
                    </motion.button>
                }

                <motion.button
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: .9 }}
                    className={styles.actionButton}
                    style={{color: "red"}} 
                    onClick={() => removeTodo(item.id)}
                >
                    <AiOutlineClose/>
                </motion.button>
            </div>
            {item.completed && <span className={styles.done}>done</span>}
        </motion.li>
    </Tilt>
  )
}

export default TodoItem