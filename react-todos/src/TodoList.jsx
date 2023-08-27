import { useState } from "react";
import List from '@mui/material/List';
import TodoItem from "./TodoItem";

const initialTodos = [
    { id: 1, text: "take the dog fow a walk", complete: true },
    { id: 2, text: "take the cat fow a walk", complete: false },
    { id: 3, text: "take the elephant fow a walk", complete: false },
    { id: 4, text: "take the giraf fow a walk", complete: false },
    { id: 5, text: "take the zebra fow a walk", complete: false }
]



export default function TodoList() {

    const [todos, setTodos] = useState(initialTodos);


    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter((t) => t.id !== id);
        });
    };

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, complete: !todo.complete }
                } else {
                    return todo
                }
            })
        })
    }


    return (

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    remove={removeTodo}
                    toggle={() => toggleTodo(todo.id)}
                />
            ))}
        </List>

    );
}

