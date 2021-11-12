import React from 'react';
import { Link } from 'react-router-dom'

const Bj = (props) => {
    return (
        <section className="Table">
            <div className="Act-Window active">
                <h2 className="action">Добро пожаловать в Блекджек!</h2>
                <p className="result">Введите свою ставку чтобы начать играть</p>
                <input type="number" id='cash'/>
                <div className="buttons">
                    <button onClick={() => {props.RmPopUpBJ(); props.StartBlackJack()}}>Играть</button>
                    <Link to={'/'}>Уйти</Link>
                </div>
            </div>
            <div className="Card diller closed" style={{left: 60 + 'vw'}}></div>

            <div className="Card" style={{left: 20 + 'vw'}}></div>
            <div className="Card diller" style={{left: 55 + 'vw'}}></div>
            <div className="Card" style={{left: 25 + 'vw'}}></div>

            <div className="Deck" onClick={()=>{props.TakeCard()}}></div>
            <button className="End" onClick={()=>{props.PointCheck(true)}}>Хватит</button>
        </section>
    );
}
//
export default Bj;
