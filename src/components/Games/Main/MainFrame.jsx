import React from 'react';

const Mainframe = (props) => {
    return (
        <section className="Preview loading">
            <div className="wrapper">
                <div className="greetings">
                    <h2>Рофлан Казиныч</h2>
                    <p>Лучшее онлайн казино в СНГ</p>
                </div>
                <button onClick={props.SwitchPopUp}>Начать</button>
            </div>
            
        </section>
    );
}

export default Mainframe;
