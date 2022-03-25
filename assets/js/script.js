document.addEventListener('DOMContentLoaded', () => {

//card options
const cardArray = [
    {
        name: 'angry',
        img: 'assets/images/angry.png'
    },
    {
        name: 'angry',
        img: 'assets/images/angry.png'
    },
    {
        name: 'happy',
        img: 'assets/images/happy.png'
    },
    {
        name: 'happy',
        img: 'assets/images/happy.png'
    },
    {
        name: 'loving',
        img: 'assets/images/loving.png'
    },
    {
        name: 'loving',
        img: 'assets/images/loving.png'
    },
    {
        name: 'sad',
        img: 'assets/images/sad.png'
    },
    {
        name: 'sad',
        img: 'assets/images/sad.png'
    }
];

cardArray.sort(() => 0.5 - Math.random());
    
const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];



//this function creates the game board
//the bord are buildt in cards and creates childrens for the div.grid in the HTML

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'assets/images/cover.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}


//this function checks if the picked cards are matched, if else it flips back and the user gets an alert
function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match');
        cards[optionOneId].setAttribute('src', 'assets/images/blank.png');
        cards[optionTwoId].setAttribute('src', 'assets/images/blank.png');
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'assets/images/cover.png');
        cards[optionTwoId].setAttribute('src', 'assets/images/cover.png');
        alert('Sorry, try again');
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulation! You got them all.';
    }
}


//this function flip the chosen cards and fill the space with the next image from the cardArray
//the if-statement checks so two cards are chosen
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 2);
    }
}


createBoard();

});