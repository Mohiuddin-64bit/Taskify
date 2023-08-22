import React, { useState } from "react";
import InputField from "./component/InputField";
import { Todo } from "./component/model";
import TodoList from "./component/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo('');
    }
  }
  console.log(todos)
  return (
    <div className="bg-gradient-to-r h-screen w-screen from-indigo-500 via-purple-500 to-pink-400 items-center flex flex-col">
      <h2 className="font-primary text-center pt-12 font-bold text-4xl lg:text-6xl uppercase z-10">
        Taskify
      </h2>
      <InputField  handleAdd={handleAdd} todo={todo} setTodo={setTodo}></InputField>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
};

export default App;
