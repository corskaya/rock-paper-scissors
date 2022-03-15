// DOM - Document Object Model
const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissors = document.querySelector('#btn-scissors')
const userChoiceDiv = document.querySelector('#user-choice')
const bodyElement = document.querySelector('body')

const options = ['Rock', 'Paper', 'Scissors']

btnRock.addEventListener('click', function (e) {
  userChoiceDiv.choice = e.target.getAttribute('val')
  startGame(userChoiceDiv.choice)
})

btnPaper.addEventListener('click', function (e) {
  userChoiceDiv.choice = e.target.getAttribute('val')
  startGame(userChoiceDiv.choice)
})

btnScissors.addEventListener('click', function (e) {
  userChoiceDiv.textContent = e.target.textContent
  userChoiceDiv.choice = e.target.getAttribute('val')
  startGame(userChoiceDiv.choice)
})

const computerChoiceDiv = document.createElement('p')
const renderWinner = document.createElement('p')

function startGame(userChoice) {
  computerChoiceDiv.innerHTML = ''
  const computerChoice = Math.floor(Math.random() * 3)

  computerChoiceDiv.textContent = 'Computer choice: ' + options[computerChoice]
  bodyElement.appendChild(computerChoiceDiv)

  if (userChoice == computerChoice) {
    renderWinner.textContent = 'Draw!'
  } else if ((userChoice == 0 && computerChoice == 2) || (userChoice == 1 && computerChoice == 0) || (userChoice == 2 && computerChoice == 1)) {
    renderWinner.textContent = 'You win :)'
  } else {
    renderWinner.textContent = 'You lose :('
  }

  bodyElement.appendChild(renderWinner)
  userChoiceDiv.textContent = 'Your choice: ' + options[userChoice]
}