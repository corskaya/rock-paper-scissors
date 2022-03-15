// DOM - Document Object Model
const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissors = document.querySelector('#btn-scissors')
const userChoiceDiv = document.querySelector('#user-choice')
const bodyElement = document.querySelector('body')

btnRock.addEventListener('click', function (e) {
  userChoiceDiv.textContent = e.target.textContent
  startGame()
})

btnPaper.addEventListener('click', function (e) {
  userChoiceDiv.textContent = e.target.textContent
  startGame()
})

btnScissors.addEventListener('click', function (e) {
  userChoiceDiv.textContent = e.target.textContent
  startGame()
})

const computerChoiceDiv = document.createElement('p')
const renderWinner = document.createElement('p')
const choices = ['Rock', 'Paper', 'Scissors']

function startGame() {
  computerChoiceDiv.innerHTML = ''

  const index = Math.floor(Math.random() * 3)
  const userChoice = userChoiceDiv.textContent
  const computerChoice = choices[index]

  computerChoiceDiv.textContent = 'Computer choice: ' + computerChoice
  bodyElement.appendChild(computerChoiceDiv)

  if (userChoice === computerChoice) {
    renderWinner.textContent = 'Draw!'
  } else if ((userChoice === 'Rock' && computerChoice === 'Scissors') || (userChoice === 'Paper' && computerChoice === 'Rock') || (userChoice === 'Scissors' && computerChoice === 'Paper')) {
    renderWinner.textContent = 'You win :)'
  } else {
    renderWinner.textContent = 'You lose :('
  }

  bodyElement.appendChild(renderWinner)
  userChoiceDiv.textContent = 'Your choice: ' + userChoice
}