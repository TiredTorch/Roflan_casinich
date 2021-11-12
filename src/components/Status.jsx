import React from 'react';

const Status = (props) => {
    return (
        <div className='Status'>
            <h5>{props.state.name}</h5>
            <div className="money">
                {props.state.money}
            </div>
        </div>
    );
}


export default Status;
