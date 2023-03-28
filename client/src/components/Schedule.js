import React from 'react';
import dayjs from 'dayjs';

export default function Schedule({ startTime, endTime }) {
  const start = dayjs(`01/01/2022 ${startTime}`, 'MM/DD/YYYY HH:mm');
  const end = dayjs(`01/01/2022 ${endTime}`, 'MM/DD/YYYY HH:mm');

  const timeSlots = Array.from(
    { length: end.diff(start, 'minute') / 30 + 1 },
    (_, index) => start.add(index * 30, 'minute')
  );

  //   <Grid container item key={`time-div-${i}`}>
  //     <div
  //       style={{
  //         width: '100%',
  //         display: 'flex',
  //         justifyContent: 'start',
  //         alignItems: 'center',
  //         minHeight: '40px',
  //         borderBottom: '1px solid lightgrey',
  //         borderTop: `${i === 0 ? '1px solid lightgrey' : 'none'}`,
  //       }}
  //     >{`${time}:00`}</div>
  //   </Grid>;

  return (
    <ul>
      {timeSlots.map((time) => (
        <li key={time.format('h:mm A')}>{time.format('h:mm A')}</li>
      ))}
    </ul>
  );
}
