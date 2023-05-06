import React, { useState } from "react";
import FormInput from "./component/FormInput";
import MainLayout from "./layout/MainLayout";
import { Todo } from "./model";
import TodoList from "./component/TodoList";


const Home: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  // setTodos([...todos, {
  //   id: 1681969150947,
  //   isDone: false,
  //   todo: "Buy a book"
  // }])

  const handelAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo("")
    }
  }

  console.log(todos)


  return (

    <div className="p-4 bg-slate-200 h-screen">
      <MainLayout>
        <FormInput todo={todo} setTodo={setTodo} handelAdd={handelAdd} />
        <TodoList todos={todos} setTodos={setTodos} />

        {/* {
          todos.map((data) => (
            <li key={data.id}>{data.todo}</li>
          ))
        } */}


      </MainLayout>
    </div>
  )
}


export default Home