import styles from "./style.module.css";
import Shortid from "shortid";
export default function TodoItem({ todoList, setTodoList }) {
  const handleDelete = (todoItem) => {
    console.log("Delete button was Clicked for item", todoItem.name);
    setTodoList(todoList.filter((todo) => todo !== todoItem));
  };

  const handleClick = (todoItem) => {
    console.log("Item text was clicked for", todoItem.name);
    setTodoList(
      todoList.map((todo) =>
        todo.name === todoItem.name ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const sortedTodos = todoList
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return sortedTodos.map((todoItem) => (
    <div className={styles.itemContainer} key={Shortid.generate()}>
      <span className={todoItem.done ? styles.completed : ""}>
        <h3 onClick={() => handleClick(todoItem)} className={styles.itemName}>
                    {todoItem.name}     
        </h3>
      </span>
      <button
        onClick={() => handleDelete(todoItem)}
        className={styles.itemButton}
      >
                X      
      </button>
    </div>
  ));
}
