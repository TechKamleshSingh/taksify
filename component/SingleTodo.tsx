import { Todo } from "@/lib/types";
import { Dispatch, FC, FormEvent, SetStateAction } from "react";

interface Props {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    data: Todo;
    todos: Todo[];
}


const SingleTodo: FC<Props> = ({ data, todos, setTodos }) => {

    const handleEditTodo = () => {
        console.log("Edit Todo")
    }

    const handleDeleteTodo = (id: number) => {
        console.log("id", id)
        const filter = todos.filter((todo) => todo.id !== id)
        setTodos(filter);
    }

    const handleMarkIsDoneTodo = (id: number) => {
        const filter = todos.filter((todo) => todo.id === id)
        const newFilter = {
            id: filter[0].id,
            todo: filter[0].todo,
            isDone: true
        }
        const filter2 = todos.filter((todo) => todo.id !== id)
        console.log("fil", filter2)
        setTodos([newFilter, ...filter2])
    }


    let dateTime = new Date(data.id)
    const formattedDateTime = dateTime.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

    return (
        <>
            <div key={data.id} className="bg-gray-300  border border-dashed border-white flex flex-wrap gap-3  m-3 items-center justify-between md:justify-center w-1/2 p-1 rounded-lg">
                <div className="font-bold text-orange-500 p-2 rounded capitalize after:content-['_↗'] ">
                    {data.todo}
                </div>
                <div>{String(formattedDateTime)}</div>
                <div className="flex justify-center items-center gap-3 ">
                    <div onClick={handleEditTodo}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    </div>
                    <div onClick={() => handleDeleteTodo(data.id)}>
                        <svg color="red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </div>
                    <div onClick={() => handleMarkIsDoneTodo(data.id)}>
                        <svg color={data.isDone ? "green" : ''} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SingleTodo;