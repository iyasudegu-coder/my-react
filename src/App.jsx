import './App.css';
import MyButton from './components/clickMeButton';
import Welcome from './components/welcome';
import Profile from './profile';

function App() {
  return (
    <div className="App">
      <div className="profile-card">
        <Profile />
        <Welcome />
        <MyButton />
      </div>
    </div>
  );
}

export default App;