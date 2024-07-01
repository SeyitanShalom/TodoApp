import Form from "./Components/Form";
import { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import Footer from "./Components/Footer";
function App() {
  const [todo, setTodo] = useState({ name: "", done: false });
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <>
      <Header todo={todo} todos={todos} setTodo={setTodo} setTodos={setTodos} />
      <Form todo={todo} todos={todos} setTodo={setTodo} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </>
  );
}

export default App;
