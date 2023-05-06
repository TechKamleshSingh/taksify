import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}



const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="flex flex-wrap ">
            {todos.map((data) => (
                <SingleTodo key={data.id} data={data} todos={todos} setTodos={setTodos} />
            ))}
        </div>
    )
}

export default TodoList;