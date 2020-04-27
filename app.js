var scores,roundScore,activePlayer,gamePlaying;

start();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){
          //Randomnumber
          var dice = Math.floor(Math.random() * 6) + 1;
        
          //Display the result
          var diceDom = document.querySelector('.dice');
          diceDom.style.display = 'block';
          diceDom.src = 'dice-' + dice + '.png';
        
        
        
          //update the results if the dice not equal to 1
          if(dice === 6 && lastDice===6){
             //player looses his score
             scores[activePlayer] = 0;
             ocument.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
             nextPlayer();
             
          }else if (dice !== 1) {
              roundScore += dice;
              document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
          } else {
              //next player
              nextPlayer();
        
          }
          lastDice = dice; 
    } 
});

document.querySelector('.btn-hold').addEventListener('click',function(){
  
  if(gamePlaying){
      //Add current score to global score
      scores[activePlayer] += roundScore;
      
      //update ui
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      
      
      // setting final score from user
      var input = document.querySelector('.final-score').value;
      var winningScore;
      if(input){
          winningScore = input;
      }else{
          winningScore = 100;
      }
      
      //check if player won or not
      if (scores[activePlayer] >=winningScore) {
          document.querySelector('#name-' + activePlayer).textContent = '   Winner! ';
          document.querySelector('.dice').style.display = 'none';
          document.querySelector('.player-' + activePlayer + '-panel ').classList.add('winner');
          document.querySelector('.player-' + activePlayer + '-panel ').classList.remove('active');
          gamePlaying=false;
      } else {
          nextPlayer();
      }
  }
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 :activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click',start);



function start(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying=true;
    
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel ').classList.remove('winner');
    document.querySelector('.player-1-panel ').classList.remove('winner');
   document.querySelector('.player-0-panel ').classList.remove('active');
   document.querySelector('.player-1-panel ').classList.remove('active');
   document.querySelector('.player-0-panel ').classList.add('active');
    
   
};















