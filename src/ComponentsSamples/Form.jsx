import { useState } from "react";
import styles from "./style.module.css";
export default function Form({ todoList, setTodoList }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  const handleChange = (event) => {
    setTodo({ name: event.target.value, done: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, todo]);
    console.log(todoList);
    setTodo({ name: "", status: false });
  };
  return (
    <div className={styles.formContainer}>
           {" "}
      <form className={styles.todoForm} onSubmit={handleSubmit}>
               {" "}
        <div className={styles.container}>
                   {" "}
          <input
            className={styles.todoInput}
            type="text"
            value={todo.name}
            onChange={handleChange}
            placeholder="Input your Todo item..."
          />
                   {" "}
          <button className={styles.todoButton} type="submit">
                        Add          {" "}
          </button>
                 {" "}
        </div>
             {" "}
      </form>
         {" "}
    </div>
  );
}
