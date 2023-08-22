import React, { useEffect, useRef, useState } from "react";
import { Todo } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false)
  };
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])


  return (
    <div>
      <form
        onSubmit={(e) => handleEdit(e, todo.id)}
        className="flex font-primary items-center justify-between p-2 lg:p-5 mt-4 bg-task-bg w-40 md:w-72 lg:w-[500px] rounded-lg"
      >
        {edit ? (
          <input
            value={editTodo}
            ref={inputRef}
            className="outline-none w-full rounded-md p-2"
            onChange={(e) => setEditTodo(e.target.value)}
          ></input>
        ) : todo.isDone ? (
          <s className="lg:px-5 text-red-600 text-lg lg:text-2xl">
            {todo.todo}
          </s>
        ) : (
          <span className="lg:px-5 text-lg lg:text-2xl">{todo.todo}</span>
        )}

        <div className="flex lg:gap-3">
          <span
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <AiFillEdit></AiFillEdit>
          </span>
          <span onClick={() => handleDelete(todo.id)}>
            <AiFillDelete></AiFillDelete>
          </span>
          <span onClick={() => handleDone(todo.id)}>
            <MdDone></MdDone>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SingleTodo;
