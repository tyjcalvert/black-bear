import logo from './logo.svg';
import AppBar from './components/AppBar';
import BasicContainer from './components/BasicContainer';
import DayPlanner from './components/DayPlanner';
import './App.css';

function App() {
  return (
    <div
      className='App'
      style={{ backgroundColor: '#1167b1', height: '100vh' }}
    >
      <AppBar />
      <BasicContainer>
        <DayPlanner />
      </BasicContainer>
    </div>
  );
}

export default App;
