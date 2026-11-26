import './App.css';
import Welcome from './components/welcome';
import Profile from './profile';

function App() {
  return (
    <div className="App">
      <div className="profile-card">
        <Profile />
        <Welcome />
      </div>
    </div>
  );
}

export default App;