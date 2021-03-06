/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
            
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    // 3. Update round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;   
    } else {
        nextPlayer();
    }
        
  }

});


document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if (gamePlaying) {
            // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    
    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    // Check if player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        // Next player
        nextPlayer();
    }  
    }
  
});

function nextPlayer() {
        // Next player turnery operator
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        // Toggles to show the active player
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
    }

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}




/* THREE CHALLENGES
Change the game to follow these rules:

1. A player loses his ENTIRE score when he rolls two 6 in a row. After that it's the next player's turn (hint: Always save the previous dice roll in a s
separate variable)
2. Add an inut field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JS. This is a good opportunity to use Google to figure this out :)
3. Add another dice to the game so that there will be 2 dies now. The player loses his current score when one of them is a 1. (Hint: you will need CSS to position the second die, so take a look at the CSS code for the first one.)
4. Make the numbers add up in the score box in real time, without pressing hold.
*/







//Math.random * 6 produces a number between 0 - 5. Math.floor makes it an integer, adding 1 lets us get an integer b/t 1 - 6.
//dice = Math.floor(Math.random() * 6) + 1;
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'