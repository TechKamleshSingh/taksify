import { Dispatch, SetStateAction, useRef } from "react";

interface Props {
    todo: string;
    setTodo: Dispatch<SetStateAction<string>>;
    handelAdd: (e: React.FormEvent) => void;
}

 
const FormInput: React.FC<Props> = ({ todo, setTodo, handelAdd }) => {


    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div className="flex justify-center w-[100%]">
            <div className="">
                <form className="flex" onSubmit={(e) => {
                    handelAdd(e),
                        inputRef.current?.blur()
                }}>
                    <div>
                        <input type="text"
                            ref={inputRef}
                            value={todo}
                            onChange={e => setTodo(e.target.value)}
                            name="todo" placeholder="Enter your task..."
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-dotted focus:bg-white"
                        />
                    </div>
                    <div>
                        <button type="submit" className="bg-gray-300  border-gray-100 ml-4 py-3 px-4 mb-3 rounded text-gray-500 hover:bg-slate-200 hover:outline-dotted"  >Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormInput;