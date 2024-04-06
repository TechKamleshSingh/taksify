import React, { useState } from "react";
import FormInput from "../component/FormInput";
import MainLayout from "./layout/MainLayout";
import TodoList from "../component/TodoList";
import { Todo } from "@/lib/types";


const Home: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])


  const handelAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([{ id: Date.now(), todo: todo, isDone: false }, ...todos,])
      setTodo("")
    }
  }

  return (

    <div className="p-4 bg-slate-200 h-screen">
      <MainLayout>
        <FormInput todo={todo} setTodo={setTodo} handelAdd={handelAdd} />
        <TodoList todos={todos.filter((todo) => todo.isDone !== true )} setTodos={setTodos} />
        <TodoList todos={todos.filter((todo) => todo.isDone !== false )} setTodos={setTodos} />
      </MainLayout>
    </div>
  )
}


export default Home