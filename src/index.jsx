import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
import App from './components/App.jsx';
import state from './redux/state.jsx';
import {SwitchPopUp} from './redux/state.jsx';
import {RmPopUpBJ, TakeCard, StartBlackJack, PointCheck} from './redux/state.jsx'


ReactDOM.render(
  <React.StrictMode>
    <App state={state} 
      SwitchPopUp = {SwitchPopUp}
      RmPopUpBJ = {RmPopUpBJ} 
      TakeCard = {TakeCard} 
      StartBlackJack = {StartBlackJack}
      PointCheck = {PointCheck}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

