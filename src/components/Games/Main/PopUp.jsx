import React from 'react';

const Popup = (props) => {
    return (
        <section class="Pop-Up">
            <h3>Чтобы начать выберете развлечение на панели слева</h3>
            <div class="rule__wrapper">
                <div class="rule">
                    <h4>
                        Блекджек
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid laboriosam qui porro quam, exercitationem unde asperiores illo eius officiis omnis.</p>
                </div>
                <div class="rule">
                    <h4>
                        Слот машина
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid laboriosam qui porro quam, exercitationem unde asperiores illo eius officiis omnis.</p>
                </div>
                <div class="rule">
                    <h4>
                        Предсказания
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid laboriosam qui porro quam, exercitationem unde asperiores illo eius officiis omnis.</p>
                </div>
            </div>
            
            <button onClick={props.SwitchPopUp}>Все понятно</button>
        </section>
    );
}

export default Popup;
