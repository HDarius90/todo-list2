import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

const initialTodos = [
    { id: 1, text: "take the dog fow a walk", complete: true },
    { id: 2, text: "take the cat fow a walk", complete: false },
    { id: 3, text: "take the elephant fow a walk", complete: false },
    { id: 4, text: "take the giraf fow a walk", complete: false },
    { id: 5, text: "take the zebra fow a walk", complete: false }
]

export default function TodoList() {

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {initialTodos.map((todo) => {
                const labelId = `checkbox-list-label-${todo.id}`;

                return (
                    <ListItem
                        key={todo.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                                <CommentIcon />
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined}  dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={todo.complete}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={todo.text} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

