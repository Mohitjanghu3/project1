document.addEventListener('DOMContentLoaded', () => {
    const choiceButtons = document.querySelectorAll('.choice-button');
    const resultDiv = document.getElementById('result');
    const playAgainButton = document.getElementById('play-again');

    // Function to get a random choice for the computer
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function to determine the winner
    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It\'s a tie!';
        }

        if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'rock')
        ) {
            return 'You win!';
        }

        return 'Computer wins!';
    }

    // Handle button clicks
    choiceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const userChoice = button.getAttribute('data-choice');
            const computerChoice = getComputerChoice();
            const result = determineWinner(userChoice, computerChoice);

            resultDiv.innerHTML = `You chose: ${userChoice}<br>Computer chose: ${computerChoice}<br>${result}`;
            playAgainButton.style.display = 'inline-block';
        });
    });

    // Play again button event listener
    playAgainButton.addEventListener('click', () => {
        resultDiv.innerHTML = '';
        playAgainButton.style.display = 'none';
    });
});
