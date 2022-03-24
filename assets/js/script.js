document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'angry',
            img: 'images/angry.png'
        },
        {
            name: 'angry',
            img: 'images/angry.png'
        },
        {
            name: 'happy',
            img: 'images/happy.png'
        },
        {
            name: 'happy',
            img: 'images/happy.png'
        },
        {
            name: 'loving',
            img: 'images/loving.png'
        },
        {
            name: 'loving',
            img: 'images/loving.png'
        },
        {
            name: 'sad',
            img: 'images/sad.png'
        },
        {
            name: 'sad',
            img: 'images/sad.png'
        }
    ];

    const grid = document.querySelector('.grid');


    //this function creates the game board
    //the bord are buildt in cards and creates childrens for the div.grid in the HTML

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/loving.png');
            card.setAttribute('data-id', i);
            //card.addEventListener('click', flipcard)
            grid.appendChild(card);

        }
    }

createBoard();












});