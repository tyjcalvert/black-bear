import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import BasicDateCalendar from './Calendar';
import TaskList from './TaskList';
import Schedule from './Schedule';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
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
              <TaskList tasks={[0, 1, 2, 3, 4]} numbered={true} />
            </Item>
          </Grid>
          <Grid paddingTop={2}>
            <Item>
              <h3>To Dos</h3>
              <hr />
              <TaskList tasks={[0, 1, 2, 3, 4]} />
            </Item>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h3>Schedule</h3>
            <Schedule startTime='06:00' endTime='22:00' />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
