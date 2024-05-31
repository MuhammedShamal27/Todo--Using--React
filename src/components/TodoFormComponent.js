import React,{useState,useEffect} from "react"

 const TodoForm = ({addTodo}) => {
    const [value,setValue]=useState("");
    const [ error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(value.trim()===''){
            setError("Enter a value");
        }else{
            setError('');
            addTodo(value)
            setValue("")
        }
    }
    return(

        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="Text" className="todo-input" value={value}
            placeholder="what is the task today?" 
            onChange={(e)=>setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">Add Task</button>
           {error.length!==0 && <div>
                <p style={{color:"red",fontSize:'15px'}}>{error}</p>
            </div>}
        </form>
    )
}

export default TodoForm;