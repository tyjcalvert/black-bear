import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import BasicDateCalendar from './Calendar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
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
    <Box sx={{ width: '100%', marginTop: '16px' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} t>
          <h2 style={{ color: '#fff' }}>
            Day & Date {new Date(Date.now()).toLocaleDateString()}
          </h2>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h3>Calendar</h3>
            <hr />
            <BasicDateCalendar />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Grid>
            <Item>
              <h3>Top Priorities</h3>
              <hr />
              <List
                sx={{
                  width: '100%',
                  bgcolor: 'background.paper',
                }}
              >
                {[0, 1, 2, 3, 4].map((value, i) => {
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
                      <h4 style={{ marginLeft: '8px' }}>{i + 1 + ')'}</h4>
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(value)}
                        dense
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge='start'
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={labelId}
                          primary={`Line item ${value + 1}`}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Item>
          </Grid>
          <Grid paddingTop={2}>
            <Item>
              <h3>TO DOs</h3>
              <hr />
              <List
                sx={{
                  width: '100%',
                  bgcolor: 'background.paper',
                }}
              >
                {[0, 1, 2, 3, 4].map((value, i) => {
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
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(value)}
                        dense
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge='start'
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={labelId}
                          primary={`Line item ${value + 1}`}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Item>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h3>Schedule</h3>
            <hr />
            {[6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
              (time, i) => (
                <Grid container item key={`time-div-${i}`}>
                  <Grid container item>
                    <Grid item xs={6}>{`${time}:00`}</Grid>
                    <Grid item xs={6}>
                      event
                    </Grid>
                  </Grid>
                  <Grid container item>
                    <Grid item xs={6}>{`${time}:30`}</Grid>
                    <Grid item xs={6}>
                      event
                    </Grid>
                  </Grid>
                </Grid>
              )
            )}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
