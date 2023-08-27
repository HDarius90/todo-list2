import { useState, useEffect } from "react";
import List from '@mui/material/List';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if (!data) return [];
    return data;
};


export default function TodoList() {

    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

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

    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, { id: crypto.randomUUID(), text: text, complete: false }]
        });
    };


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
            <TodoForm addTodo={addTodo} />
        </List>

    );
}

