import React, {useState} from 'react'
import { Switch, Route } from "react-router-dom";
import './App.css';
import CreateUser from './components/CreateUser';
import CreateEvent from './components/CreateEvent';
import UserBox from "./components/UserBox";
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

  const dataMerchant = JSON.parse(window.localStorage.getItem(''));
  const [listMerchant, setListMerchant] = useState(dataMerchant || []);
  const [listEvent, setListEvent] = useState(dataMerchant || []);


  return (
    <div className="App">
    <img src={logo} style={style}/>
      <Route render={({location})=> (
        <Switch location={location}>
          <Route exact path="/cadastro" render={(routeProps)=> (
            <CreateUser  />
          )}/>

          <Route exact path="/cadastro-evento" render={(routeProps)=> (
            <CreateEvent/>
          )}/>

          <Route exact path="/user-page" render={(routeProps)=> (
            <UserBox />
          )}/>
        </Switch>
        
      )}/>
  </div>
  );
}

export default App;
