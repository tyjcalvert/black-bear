import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

export default function Notes({ notes = [], numbered = false }) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
      }}
    >
      {notes.map((value, i) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge='end' aria-label='comments'>
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            {numbered && <h4 style={{ marginLeft: '8px' }}>{i + 1 + ')'}</h4>}
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value)}
              dense
            >
              <ListItemText
                sx={{ minHeight: '100px' }}
                id={labelId}
                primary={`Line item ${value + 1}`}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
