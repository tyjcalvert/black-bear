import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function BasicContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xl'>{children}</Container>
    </React.Fragment>
  );
}
