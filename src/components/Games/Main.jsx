import Popup from './Main/PopUp';
import Mainframe from './Main/MainFrame';
import React, { Component } from 'react';

class Main extends Component {

    componentDidMount(){
        setTimeout(
            () => {
                document.getElementsByClassName('Preview')[0].classList.toggle('loading')
            }, 1000
        )
    }

    render() {
        return (
            <div>
                <Mainframe SwitchPopUp={this.props.SwitchPopUp}/>
                <Popup SwitchPopUp={this.props.SwitchPopUp}/>
            </div>
        );
    }
}

export default Main;

