import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function TodoItem({ todo, remove, toggle }) {
    const labelId = `checkbox-list-label-${todo.id}`;
    const removeTodo = () => {
        remove(todo.id)
    };

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                    <DeleteForeverIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.complete}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onClick={toggle}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.text} />
            </ListItemButton>
        </ListItem>
    )
}