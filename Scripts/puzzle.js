const imageNames = ['cat.jpeg', 'horse.jpeg', 'buck.jpeg', 'lion.jpeg', 'dino.jpeg', 'rabbit.jpeg', 'tiger.jpeg', 'zebra.jpeg']; // Add more image names as needed
const grid = document.querySelector('.game-grid');
let flippedCards = []; // Array to store flipped cards
let timerStarted = false;
let startTime;
let gameEnded = false;

// Duplicate image names array to create pairs
const cardsArray = imageNames.concat(imageNames);

// Shuffle cardsArray
cardsArray.sort(() => 0.5 - Math.random());

// Function to create cards
function createCard(imageName) {
    const card = document.createElement('div');
    card.id = 'cardId'
    card.classList.add('card');
    card.innerHTML = `<img class="hidden" src="../images/puzzleImages/${imageName}" alt="Card Image">`; 
    return card;
}

function startGame(card) {
    function cardClickListener() {
        if (!gameEnded) {
            revealCard(card);
        }
    }
    card.addEventListener('click', cardClickListener);
    button = document.getElementById('strt')
    button.style.display = 'none'

    if (!timerStarted) {
        startTimer(card, cardClickListener);
        timerStarted = true;
    }
}

// Function to handle card clicks
function handleCardClick() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        startGame(card);
    });

    // Remove the event listener from the "Start" button
    document.getElementById('start').removeEventListener('click', handleCardClick);
}

// Add event listener to the "Start" button
document.getElementById('start').addEventListener('click', handleCardClick);


function startTimer(card, cardClickListener) {
    // Function to start the timer
    startTime = new Date().getTime();
    let secondsLeft = 30;
    const timerElement = document.getElementById('timer');

    // Update the timer every second
    timerInterval = setInterval(() => {
        const minutes = Math.floor(secondsLeft / 60);
        const remainingSeconds = secondsLeft % 60;
        
        // Format the time display with leading zeros if necessary
        const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

        timerElement.innerHTML = `Time left: <span class="time">${formattedTime}</span>`;
        secondsLeft--;

        if (secondsLeft < 0) {
            // If time is up, clear the timer and display an alert
            clearInterval(timerInterval);
            alert("Time's up!");
            gameEnded = true;
            card.removeEventListener('click', cardClickListener);
        
        }
    }, 1000);
}


// Function to reveal card
function revealCard(card) {
    card.children[0].classList.toggle('hidden');
    flippedCards.push(card.children[0]);

    if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;

        if (firstCard.src === secondCard.src) {
            // Match found
            setTimeout(() => {
                flippedCards.forEach(card => card.parentElement.classList.add('matched'));
                flippedCards = [];
            }, 1000);
        } else {
            // No match
            setTimeout(() => {
                flippedCards.forEach(card => card.classList.add('hidden'));
                flippedCards = [];
            }, 1000);
        }
    }
}

// Generate cards and append to grid
cardsArray.forEach(imageName => {
    const card = createCard(imageName);
    grid.appendChild(card);
});

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}