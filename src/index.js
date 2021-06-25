const startButton = document.querySelector('#start');
const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];

startButton.addEventListener('click', () => {
  //create buttons for rock paper scissors input
  for (const content of rockPaperScissors) {
    let newButton = document.createElement('button');
    newButton.textContent = content;
    newButton.setAttribute('id', content);
    document.body.append(newButton);
  }
  //removes start button
  startButton.remove();
  
  const rockButton = document.querySelector('#Rock');
  const paperButton = document.querySelector('#Paper')
  const scissorsButton = document.querySelector('#Scissors')
  let i = 0;

  rockButton.addEventListener('click', () => {
    let opponent = Math.floor(Math.random() * 3); //assign random number 0, 1, or 2
    
    if (i !== 0) {
        document.querySelector('#btnContainer').remove();
    }
    i++;

    let div = document.createElement('div');
    div.setAttribute('id', 'btnContainer');
    document.body.append(div);
    
    createSentence('You chose Rock.', div);
    createSentence('Opponent chose ' + rockPaperScissors[opponent] + ".", div);
    endResults(2,1,opponent, div);


  });
  paperButton.addEventListener('click', () => {
    let opponent = Math.floor(Math.random() * 3); //assign random number 0, 1, or 2
        
    if (i !== 0) {
        document.querySelector('#btnContainer').remove();
    }
    i++;
    
    let div = document.createElement('div');
    div.setAttribute('id', 'btnContainer');
    document.body.append(div);
    
    createSentence('You chose Paper.', div);
    createSentence('Opponent chose ' + rockPaperScissors[opponent] + ".", div);
    endResults(0,2,opponent, div);
  });
  scissorsButton.addEventListener('click', () => {
    let opponent = Math.floor(Math.random() * 3); //assign random number 0, 1, or 2
        
    if (i !== 0) {
        document.querySelector('#btnContainer').remove();
    }
    i++;
    
    let div = document.createElement('div');
    div.setAttribute('id', 'btnContainer');
    document.body.append(div);
    
    createSentence('You chose Scissors.', div);
    createSentence('Opponent chose ' + rockPaperScissors[opponent] + ".", div);
    endResults(1,0,opponent, div);
  });
  
})

//function determines where to place a statement inputted
function createSentence(statement, where) {
  let p = document.createElement('p');
  p.textContent = statement;
  where.append(p);
}

//function decides who wins
function endResults(winningCondition, losingCondition, opponent, where) {
  if (opponent == winningCondition) {
    createSentence('You Won!', where);
  } else if (opponent == losingCondition) {
    createSentence('You Lost..', where);
  } else {
    createSentence('Tie.', where);
  }
}