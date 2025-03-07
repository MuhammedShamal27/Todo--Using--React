import React,{useState} from "react";
import TodoForm from "./TodoFormComponent";
import {v4 as uuidv4} from 'uuid';
import { Todo } from "./Todo";
import { isEditable } from "@testing-library/user-event/dist/utils";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();


export const Wrapper = () => {
    const [todos,setTodos] =useState([])

    const addTodo = todo =>{
        setTodos([...todos,{id:uuidv4(),task:todo,completed:false ,isEditing:false}])
        console.log(todos)
    }
    const toggleComplete =id => {
        setTodos(todos.map(todo => todo.id ===id ? {...todo ,completed:!todo.completed}:todo))
    }
    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !==id))
    }
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id == id? {
            ...todo,isEditing :!todo.isEditing} :todo))

    }
    const editTask =(task,id) =>{
        setTodos(todos.map(todo=> todo.id === id ?{
            ...todo,task,isEditing: !todo.isEditing}:todo))
    }

    return (
        <div className="Wrapper">
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo,index)=>(
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo}/>
                ) :(
                    <Todo task={todo} key={index}
                    toggleComplete={toggleComplete} 
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    />
                )
                
                
            ))}
        </div>
    );
};