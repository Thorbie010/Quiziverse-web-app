const mathQuestions = [
    {
        question: "What is the result of 5 + 7?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "12"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "8", "10", "12"],
        correctAnswer: "8"
    },
    {
        question: "What is 9 multiplied by 3?",
        options: ["24", "27", "30", "33"],
        correctAnswer: "27"
    },
    {
        question: "What is the value of pi (π) to two decimal places?",
        options: ["3.14", "3.16", "3.18", "3.20"],
        correctAnswer: "3.14"
    },
    {
        question: "What is the result of 15 divided by 3?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5"
    },
    {
        question: "What is the product of 8 and 7?",
        options: ["48", "56", "64", "72"],
        correctAnswer: "56"
    },
    {
        question: "What is the sum of all angles in a triangle?",
        options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
        correctAnswer: "180 degrees"
    },
    {
        question: "What is the value of 2 to the power of 5?",
        options: ["16", "32", "64", "128"],
        correctAnswer: "32"
    },
    {
        question: "What is the result of 25 minus 13?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "12"
    },
    {
        question: "What is the circumference of a circle with diameter 10 units?",
        options: ["10π", "20π", "30π", "40π"],
        correctAnswer: "10π"
    }
];

const scienceQuestions = [
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "N2"],
        correctAnswer: "H2O"
    },
    {
        question: "Which gas do plants absorb for photosynthesis?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "What is the smallest unit of matter?",
        options: ["Atom", "Molecule", "Cell", "Proton"],
        correctAnswer: "Atom"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Mercury"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the process by which plants make their food?",
        options: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
        correctAnswer: "Photosynthesis"
    },
    {
        question: "Which organ in the human body produces insulin?",
        options: ["Pancreas", "Liver", "Kidney", "Brain"],
        correctAnswer: "Pancreas"
    },
    {
        question: "What is the hardest substance found in the human body?",
        options: ["Tooth enamel", "Bone", "Cartilage", "Tooth dentin"],
        correctAnswer: "Tooth enamel"
    },
    {
        question: "Which of the following is not a primary color of light?",
        options: ["Yellow", "Red", "Green", "Blue"],
        correctAnswer: "Yellow"
    },
    {
        question: "What is the freezing point of water in Celsius?",
        options: ["0°C", "100°C", "-273.15°C", "25°C"],
        correctAnswer: "0°C"
    },
    {
        question: "What is the study of earthquakes called?",
        options: ["Seismology", "Meteorology", "Geology", "Ecology"],
        correctAnswer: "Seismology"
    }
];

const wildLifeQuestions = [
    {
        question: "What is the largest living species of bear?",
        options: ["Polar Bear", "Grizzly Bear", "Kodiak Bear", "Sun Bear"],
        correctAnswer: "Polar Bear"
    },
    {
        question: "Which bird is known for its impressive courtship dance, often performed during mating season?",
        options: ["Peacock", "Flamingo", "Bird of Paradise", "Cockatoo"],
        correctAnswer: "Bird of Paradise"
    },
    {
        question: "What is the primary diet of a koala?",
        options: ["Insects", "Eucalyptus leaves", "Berries and fruits", "Small mammals"],
        correctAnswer: "Eucalyptus leaves"
    },
    {
        question: "Which of the following is not a type of big cat?",
        options: ["Cheetah", "Lynx", "Jaguar", "Snow leopard"],
        correctAnswer: "Lynx"
    },
    {
        question: "Which animal is known as the fastest land mammal?",
        options: ["Cheetah", "Lion", "Giraffe", "Hyena"],
        correctAnswer: "Cheetah"
    },
    {
        question: "What is the largest species of penguin?",
        options: ["Emperor penguin", "King penguin", "Adélie penguin", "Chinstrap penguin"],
        correctAnswer: "Emperor penguin"
    },
    {
        question: "Which of the following is not a venomous snake?",
        options: ["Black mamba", "King cobra", "Boa constrictor", "Rattlesnake"],
        correctAnswer: "Boa constrictor"
    },
    {
        question: "What is the only marsupial native to North America?",
        options: ["Koala", "Kangaroo", "Opossum", "Tasmanian devil"],
        correctAnswer: "Opossum"
    },
    {
        question: "Which animal is known for its ability to change color to match its surroundings?",
        options: ["Chameleon", "Octopus", "Cuttlefish", "Archerfish"],
        correctAnswer: "Chameleon"
    },
    {
        question: "What is the largest species of shark?",
        options: ["Great white shark", "Whale shark", "Tiger shark", "Hammerhead shark"],
        correctAnswer: "Whale shark"
    },
        // Add more questions here...
];
console.log("Script file loaded");

const subjects = {
    math: mathQuestions,
    science: scienceQuestions,
    wildLife: wildLifeQuestions
};


let currentQuestionIndex = 0;
let startTime;
let timerInterval;
let correctAnswersCount = 0;



// Add event listener to the form submission
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the selected subject from the form
    const selectedSubject = document.getElementById('subjects').value;

    // Get the selected questions for the subject
    const selectedQuestions = subjects[selectedSubject];

    // Display the quiz container and load the questions
    const quizDiv = document.getElementById('quiz');
    quizDiv.style.display = 'block'; // Show the quiz section
    loadQuiz(selectedQuestions);
    
    // Start the countdown timer
    startTimer();
});
// Add event listener to the SKIP button
document.getElementById('skipBtn').addEventListener('click', function() {
    const selectedSubject = document.getElementById('subjects').value;
    nextQuestion(subjects[selectedSubject]);
});

// Function to load the quiz with selected questions
function loadQuiz(questions) {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    // Reset current question index
    currentQuestionIndex = 0;

    // Display the first question
    showQuestion(questions);
    document.getElementById('quizForm').style.display = 'none'; 
    document.getElementById('quiz-para').style.display = 'none'; // Hide the quiz form
    // Hide the quiz form

}

// Function to display a question
function showQuestion(questions) {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    // Get the current question
    const currentQuestion = questions[currentQuestionIndex];

    // Display the question and options
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = ''; // Clear previous options

    // Randomize options
    const randomizedOptions = currentQuestion.options.sort(() => Math.random() - 0.5);

    // Create buttons for each option
    randomizedOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => {
            const isCorrect = option === currentQuestion.correctAnswer;
            recordTime(isCorrect);


            // Change button color based on correctness
            if (isCorrect) {
                button.style.backgroundColor = 'green';
                correctAnswersCount++;
            } else {
                button.style.backgroundColor = 'red';
            }

            // Load the next question after a delay
            setTimeout(() => {
                nextQuestion(questions);
            }, 1000); // Change question after 1 second
        };
        optionsElement.appendChild(button);
    });

    // Show the skip button if it's not the last question
    document.getElementById('skipBtn').style.display = 'inline-block';

    // Start time for the question
    startTime = Date.now();
}

// Function to load the next question
function nextQuestion(questions) {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(questions);
    } else {
        // If it's the last question, clear the timer and display the results
        clearInterval(timerInterval);
        document.getElementById('quiz').style.display = 'none';
        displayResults();
    }
}

// Function to record time taken for correct answers
function recordTime(isCorrect) {
    if (isCorrect) {
        const endTime = Date.now();
        const timeTaken = (endTime - startTime) / 1000; // Convert to seconds
        console.log(`Time taken to answer correctly: ${timeTaken} seconds`);
    }
}

// Function to start the countdown timer
function startTimer() {
    let secondsLeft = 60; // 60 seconds countdown
    const timerElement = document.getElementById('timer');

    // Update the timer every second
    timerInterval = setInterval(() => {
        timerElement.textContent = `Time left: ${secondsLeft} seconds`;
        secondsLeft--;

        if (secondsLeft < 0) {
            // If time is up, clear the timer and display an alert
            clearInterval(timerInterval);
            document.getElementById('quiz').style.display = 'none'; // Hide the quiz container
            alert("Time's up!");
            displayResults();
        }
    }, 1000);
}

// Function to display the quiz results
function displayResults() {
    // Count the number of questions answered and correct answers
    const questionsAnswered = currentQuestionIndex + 1;
    // Display the results in a paragraph
    const resultsElement = document.getElementById('results');
    resultsElement.textContent = `Questions answered: ${questionsAnswered}, Correct answers: ${correctAnswersCount}`;
    document.getElementById('quizForm').style.display = 'block';
    document.getElementById('quiz-para').style.display = 'block';

}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
