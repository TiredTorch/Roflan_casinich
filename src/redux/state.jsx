import Deck from '../img/deck.png';
import Ace from '../img/cards/ace.png';
import King from '../img/cards/king.png';
import Queen from '../img/cards/queen.png';
import Jack from '../img/cards/jack.png';
import Ten from '../img/cards/ten.png';
import Nine from '../img/cards/nine.png';
import Eight from '../img/cards/eight.png';
import Seven from '../img/cards/seven.png';
import Six from '../img/cards/six.png';


let state = {
    name: prompt('Как вас зовут?'),
    money: 10000,
    bid: 0,

    pos: 25,
    curCard: 1,

    userPoints: 0,
    dillerPoints: 0,

    IsEnemyTurn: false,
    cards: [
        {value: 6, pic: Six},
        {value: 7, pic: Seven},
        {value: 8, pic: Eight},
        {value: 9, pic: Nine},
        {value: 10, pic: Ten},
        {value: 2, pic: Jack},
        {value: 3, pic: Queen},
        {value: 4, pic: King},
        {value: 11, pic: Ace}
    ]
    
}

export const StartBlackJack = () => {
    state.bid = parseInt(document.getElementById('cash').value);
    state.money -= state.bid;
    document.getElementsByClassName('money')[0].innerHTML = state.money;
    state.IsEnemyTurn = false;
    state.userPoints = 0;
    state.dillerPoints = 0;
    state.pos = 25;
    state.curCard = 1;
    let cardsTemp = document.getElementsByClassName('Card');
    for (let index = 1; index < 4; index++) {
        GenCard(cardsTemp[state.curCard], index, (index * 500));
        state.curCard++;
    }
}
const GenCard = (cardsTemp, index, time) => {
    let cardIndex = Math.floor(Math.random() * 9)
    setTimeout(() => {
        cardsTemp.style.backgroundImage = `url(${state.cards[cardIndex].pic})`;
    }, time);
    setTimeout(() => {
        PointCheck(false);
    }, time + 1000);
    if(index === 2 || state.IsEnemyTurn){
        state.dillerPoints += state.cards[cardIndex].value;
    }else{
        state.userPoints += state.cards[cardIndex].value;
    }
    
}
export const TakeCard = () => {
    state.pos += 5;
    let newCard = document.createElement('div');
    newCard.classList.add('Card')
    newCard.style.left = `${state.pos}vw`
    document.getElementsByClassName('Deck')[0].before(newCard);
    let readyCard = document.getElementsByClassName('Card')[state.curCard];
    GenCard(readyCard, 1, 500);
    state.curCard++;
}
const RemoveCards = () => {
    let tempArr = document.getElementsByClassName('Card')
    for (let index = 0; index < 4; index++) {
        tempArr[index].style.backgroundImage = `url(${Deck})`;
        
    }
    for (let index = 4; index < state.curCard; index++) {
        tempArr[4].remove();
    }
}
export const PointCheck = (enough) => {
    if (state.userPoints > 21){
        setTimeout(() => {
            AlertBJ('Перебор!', 'Вы набрали слишком много очков. Попробуйте сыграть снова!')
        }, (state.curCard * 500) + 500)
    }
    else if(enough){
        state.IsEnemyTurn = true;
        EnemyTurn();
        if(state.dillerPoints > 21){
            state.money += (state.bid * 2);
            setTimeout(() => {
                AlertBJ('Диллер проиграл!', 'Очки больше 21. Попопробуйте сыграть снова!')
                document.getElementsByClassName('money')[0].innerHTML = state.money;
            }, (state.curCard * 500) + 500)
        }
        else if(state.userPoints === state.dillerPoints){
            state.money += (state.bid * 1);
            setTimeout(() => {
                AlertBJ('Ничья!', 'Очки равны. Попопробуйте сыграть снова!')
                document.getElementsByClassName('money')[0].innerHTML = state.money;
            }, (state.curCard * 500) + 500)
        }
        else if (state.userPoints < state.dillerPoints){
            setTimeout(() => {
                AlertBJ('Вы проиграли!', 'Диллер набрал больше очков чем вы. Попробуйте сыграть снова!')
            }, (state.curCard * 500) + 500)
        }
        else{
            state.money += (state.bid * 2);
            setTimeout(() => {
                AlertBJ('Вы выиграли!', 'Диллер набрал меньше очков чем вы. Попопробуйте сыграть снова!')
                document.getElementsByClassName('money')[0].innerHTML = state.money;
            }, (state.curCard * 500) + 500)
            
        }
    }
}
const EnemyTurn = () => {
    state.dillerPos = 50;
    let i = 1;
    
    GenCard(document.getElementsByClassName('Card')[0], 1, 0);  

    while(state.dillerPoints < 17){
        let newCard = document.createElement('div');
        newCard.classList.add('Card')
        newCard.classList.add('diller')
        newCard.style.left = `${state.dillerPos}vw`
        document.getElementsByClassName('Deck')[0].before(newCard);
        let readyCard = document.getElementsByClassName('Card')[state.curCard];
        GenCard(readyCard, 1, (1000 * i));  
        state.curCard++;
        state.dillerPos-=5;
        i+=1;
    }
}
const AddPopUpBJ = () => {
    document.querySelector('.Act-Window').classList.add('active');
}
export const RmPopUpBJ = () => {
    document.querySelector('.Act-Window').classList.remove('active');
}
const AlertBJ = (alert, mes) => {
    document.querySelector('.action').innerHTML = alert;
    document.querySelector('.result').innerHTML = mes;
    AddPopUpBJ();
    RemoveCards();
}


export const SwitchPopUp = () => {
    document.querySelector('.Pop-Up').classList.toggle('active');
}

export default state;