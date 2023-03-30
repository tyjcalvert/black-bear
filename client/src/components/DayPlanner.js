import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import BasicDateCalendar from './Calendar';
import TaskList from './TaskList';
import Schedule from './Schedule';
import Notes from './Notes';
import dayjs from 'dayjs';

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
        <Grid item xs={12}>
          <h2 style={{ color: '#fff' }}>
            {dayjs().format('dddd, D MMMM YYYY')}
          </h2>
          <hr
            style={{ border: 'none', height: '1px', backgroundColor: '#fff' }}
          />
        </Grid>
        <Grid item xs={4}>
          <Grid>
            <Item>
              <h3>Calendar</h3>
              <hr
                style={{
                  border: 'none',
                  height: '1px',
                  backgroundColor: 'lightgrey',
                }}
              />
              <BasicDateCalendar />
            </Item>
          </Grid>
          <Grid paddingTop={2}>
            <Item>
              <h3>Important Notes</h3>
              <hr
                style={{
                  border: 'none',
                  height: '1px',
                  backgroundColor: 'lightgrey',
                }}
              />
              <Notes notes={[0, 1, 2]} />
            </Item>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid>
            <Item>
              <h3>Top Priorities</h3>
              <hr
                style={{
                  border: 'none',
                  height: '1px',
                  backgroundColor: 'lightgrey',
                }}
              />
              <TaskList tasks={[0, 1, 2, 3, 4]} numbered={true} />
            </Item>
          </Grid>
          <Grid paddingTop={2}>
            <Item>
              <h3>To Dos</h3>
              <hr
                style={{
                  border: 'none',
                  height: '1px',
                  backgroundColor: 'lightgrey',
                }}
              />
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
