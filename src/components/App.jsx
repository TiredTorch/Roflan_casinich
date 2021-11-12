import Nav from "./Nav.jsx";
import Status from './Status.jsx';
import Main from "./Games/Main.jsx";
import Bj from "./Games/BJ.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/BJ' element={<Bj
        SwitchPopUp = {props.SwitchPopUp}
        RmPopUpBJ = {props.RmPopUpBJ} 
        TakeCard = {props.TakeCard} 
        StartBlackJack = {props.StartBlackJack}
        PointCheck = {props.PointCheck}
        />}/>
        <Route exact path='/' element={<Main SwitchPopUp={props.SwitchPopUp}/>}/>
      </Routes>
      <Status state={props.state}/>
      
      
    </BrowserRouter>
    </div>
  );
}

export default App;
