import AppBar from './components/AppBar';
import BasicContainer from './components/BasicContainer';
import DayPlanner from './components/DayPlanner';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import './App.css';
import './fonts.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'IBM Plex Mono',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        className='App'
        style={{
          backgroundColor: '#1167b1',
          minHeight: '100vh',
          paddingBottom: '8px',
        }}
      >
        <AppBar />
        <BasicContainer>
          <DayPlanner />
        </BasicContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
