import './App.css';
import CreateUser from './components/CreateUser';
import CreateEvent from './components/CreateEvent';
import logo from './images/chama-rio-logo-2.png'

const style = {
  with: '150px',
  height: '70px',
  paddingRight: '10px',
  marginTop: '10px',
  position: 'absolute',
  top: 0,
  right: 0
}

function App() {
  return (
    <div className="App">
      <img src={logo} style={style}/>
      <CreateUser/>
      <CreateEvent/>
    </div>
  );
}

export default App;
